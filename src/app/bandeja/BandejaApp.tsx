"use client"
/**
 * Athenea — Bandeja WhatsApp INDECAP
 * Arquitectura: Realtime como trigger → API routes para datos
 */
import { useState, useEffect, useRef, useCallback } from "react"
import { createClient } from "@supabase/supabase-js"

const RT = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  { auth: { persistSession:false, autoRefreshToken:false, detectSessionInUrl:false } }
)

const C = {
  navy:"#1A1E4A", navyDark:"#10133A", navyMid:"#252963",
  purple:"#312783", purpleLight:"#EEF0FF",
  gold:"#F0A500", goldLight:"#FFFBEB",
  red:"#EF4444", redLight:"#FEF2F2",
  amber:"#F59E0B", amberLight:"#FFFBEB",
  green:"#10B981", greenLight:"#ECFDF5",
  bg:"#F5F6FF", surface:"#FFFFFF",
  border:"#E8EAEF", borderLight:"#F0F1F8",
  text:"#1A1B3C", textSub:"#4B5280", textMuted:"#9CA3C8",
  bubbleIn:"#F0F1FA", bubbleOut:"#312783", bubbleAuto:"#EEF4FF",
}

interface Agent { email:string; name:string }
interface Conv  {
  id:string; phone:string; name?:string
  last_message?:string; last_message_at?:string
  last_message_direction?:string; unread_count:number
  status:string; stage?:string; program?:string
  referral_source?:string
}
interface Msg {
  id:string; conversation_id:string; phone:string
  body:string; direction:"incoming"|"outgoing"
  status?:string; created_at:string
  media_url?:string; media_type?:string; agent_name?:string
}

const PROGS = [
  {k:"enf",  s:"Enf",    c:"#3B82F6", bg:"#EFF6FF"},
  {k:"cosm", s:"Cosm",   c:"#EC4899", bg:"#FDF2F8"},
  {k:"farm", s:"Farm",   c:"#10B981", bg:"#ECFDF5"},
  {k:"vet",  s:"Vet",    c:"#F97316", bg:"#FFF7ED"},
  {k:"so",   s:"S.Oral", c:"#8B5CF6", bg:"#F5F3FF"},
  {k:"mkt",  s:"Mkt",    c:"#F59E0B", bg:"#FFFBEB"},
]
const pCfg=(p?:string)=>{
  if(!p) return null; const n=p.toLowerCase()
  if(n.includes("enfermer"))   return PROGS[0]
  if(n.includes("cosmetolog")) return PROGS[1]
  if(n.includes("farmac"))     return PROGS[2]
  if(n.includes("veterinar"))  return PROGS[3]
  if(n.includes("salud oral")) return PROGS[4]
  if(n.includes("marketing")||n.includes("mercadeo")) return PROGS[5]
  return null
}

const QUICK=[
  {icon:"🏥",label:"Precio Enf.",  text:"*TÉCNICO EN ENFERMERÍA* 🏥\n\n✅ 3 ciclos\n💰 Contado: *$2.560.000*/ciclo (18% dcto)\n💸 Financiado: 5 cuotas de *$463.200*\n\n📍 ¿En qué sede? Medellín, Envigado o Caldas 😊"},
  {icon:"💄",label:"Precio Cosm.", text:"*TÉCNICO EN COSMETOLOGÍA* 💄\n\n✅ 2 ciclos\n💰 Contado: *$1.885.000*/ciclo (20% dcto)\n💸 Financiado: 5 cuotas de *$314.700*\n\n📍 ¿En qué sede? 😊"},
  {icon:"💊",label:"Precio Farm.", text:"*TÉCNICO EN FARMACIA* 💊\n\n✅ 3 ciclos\n💰 Contado: *$1.405.000*/ciclo (20% dcto)\n💸 Financiado: 5 cuotas de *$209.100*\n\n📍 ¿En qué sede? 😊"},
  {icon:"🐾",label:"Precio Vet.",  text:"*TÉCNICO EN VETERINARIA* 🐾\n\n✅ 2 ciclos · *¡48% dcto!*\n💸 Financiado: 5 cuotas de *$237.480*\n\n📍 ¿En qué sede? 😊"},
  {icon:"🦷",label:"S. Oral",      text:"*TÉCNICO EN SALUD ORAL* 🦷\n\n✅ 3 ciclos\n💸 Financiado: 5 cuotas de *$239.900*\n\n📍 ¿En qué sede? 😊"},
  {icon:"📅",label:"Julio",        text:"📅 Próximo grupo: *6 al 11 de julio* 🗓️\n\n⚠️ Cupos *limitados* — en orden de inscripción.\n\n¿Aseguramos el tuyo? 😊"},
  {icon:"📍",label:"Sedes",        text:"📍 *Nuestras sedes:*\n\n🏫 *Envigado* — Cl 37 Sur #43A-84\n🏫 *Medellín* — Calle 56 N° 45-26\n🏫 *Caldas* — Calle 130 Sur N° 51-65\n\n¿Cuál te queda más cerca? 😊"},
  {icon:"🎓",label:"Prácticas",    text:"💪 En INDECAP el *70% de tu formación es práctica real* desde el primer ciclo.\n\nMuchos estudiantes reciben *remuneración durante las prácticas* 😊"},
]

const TEMPLATES=[
  {name:"seguimiento_enfermeria_indecap",   label:"Seg. Enfermería",   icon:"🏥"},
  {name:"seguimiento_cosmetologia_indecap", label:"Seg. Cosmetología", icon:"💄"},
  {name:"seguimiento_farmacia_indecap",     label:"Seg. Farmacia",     icon:"💊"},
  {name:"reactivacion_julio_indecap",       label:"Reactivación",      icon:"🔥"},
  {name:"descuento_general_indecap",        label:"Descuento",         icon:"💰"},
  {name:"bienvenida_indecap",               label:"Bienvenida",        icon:"👋"},
]

// ── Plantilla única de seguimiento general ─────────────────────────────────
// No depende del programa — funciona para cualquier lead
// Configuración de templates de seguimiento por programa
// Templates con {{program_name}}: envían el nombre del programa como parámetro
const SEGUIMIENTO_CFG: Record<string, { template: string; params: string[] }> = {
  enf:  { template: "seguimiento_enfermeria_indecap",   params: ["Auxiliar en Enfermería"] },
  cosm: { template: "seguimiento_cosmetologia_indecap", params: ["Cosmetología y Estética Integral"] },
  farm: { template: "seguimiento_farmacia_indecap",     params: ["Servicios Farmacéuticos"] },
  // Vet y S.Oral no tienen template propio — usan reactivación general
  vet:  { template: "reactivacion_julio_indecap",       params: [] },
  so:   { template: "reactivacion_julio_indecap",       params: [] },
}
const SEGUIMIENTO_DEFAULT = { template: "reactivacion_julio_indecap", params: [] }

function cfgSeguimiento(pc: ReturnType<typeof pCfg>) {
  if (!pc) return SEGUIMIENTO_DEFAULT
  return SEGUIMIENTO_CFG[pc.k] ?? SEGUIMIENTO_DEFAULT
}


const AV=["#312783","#0F6E56","#C0394B","#D97706","#0891B2","#7C3AED"]
const av=(p:string)=>AV[p.slice(-1).charCodeAt(0)%AV.length]
const clean=(b:string)=>b.replace(/^\[(bot|auto|horario|plantilla)[^\]]*\]\s*/i,"")
const isBot=(b:string)=>/^\[(bot|auto|horario)/i.test(b)
const fPhone=(p:string)=>{const d=p.replace(/\D/g,"");if(d.length>=12)return`(${d.slice(2,5)}) ${d.slice(5,8)}-${d.slice(8,12)}`;return p}
const fTime=(ts?:string)=>{if(!ts)return"";const d=new Date(ts),now=new Date(),diff=(now.getTime()-d.getTime())/86400000;if(diff<1)return d.toLocaleTimeString("es-CO",{hour:"2-digit",minute:"2-digit"});if(diff<2)return"Ayer";if(diff<7)return d.toLocaleDateString("es-CO",{weekday:"short"});return d.toLocaleDateString("es-CO",{day:"2-digit",month:"2-digit"})}
const fDate=(ts:string)=>{const d=new Date(ts),now=new Date(),diff=Math.floor((now.getTime()-d.getTime())/86400000);if(diff===0)return"Hoy";if(diff===1)return"Ayer";return d.toLocaleDateString("es-CO",{weekday:"long",day:"numeric",month:"long"})}
const wMins=(ts?:string)=>ts?Math.floor((Date.now()-new Date(ts).getTime())/60000):0
const wLabel=(m:number)=>m<60?`${m}m`:`${Math.floor(m/60)}h${m%60>0?` ${m%60}m`:""}`
const wBorder=(m:number,dir?:string)=>{if(dir==="outgoing")return"transparent";if(m>60)return C.red;if(m>30)return C.amber;if(m>10)return C.gold;return"transparent"}

function groupMsgs(msgs:Msg[]){
  const g:{date:string;msgs:Msg[]}[]=[]
  msgs.forEach(m=>{const k=new Date(m.created_at).toDateString();const last=g[g.length-1];if(last?.date===k)last.msgs.push(m);else g.push({date:k,msgs:[m]})})
  return g
}
function playNotif(){try{const ctx=new AudioContext();const o=ctx.createOscillator();const g=ctx.createGain();o.connect(g);g.connect(ctx.destination);o.frequency.value=880;o.type="sine";g.gain.setValueAtTime(0.15,ctx.currentTime);g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.3);o.start(ctx.currentTime);o.stop(ctx.currentTime+0.3)}catch{}}

// ── LOGIN ──────────────────────────────────────────────────────────────────
function Login({onLogin}:{onLogin:(a:Agent,t:string)=>void}){
  const [email,setEmail]=useState("")
  const [pw,setPw]=useState("")
  const [err,setErr]=useState("")
  const [loading,setLoading]=useState(false)
  const submit=async()=>{
    if(loading||!email||!pw)return
    setLoading(true);setErr("")
    try{
      const r=await fetch("/api/bandeja/auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:email.toLowerCase().trim(),password:pw})})
      const d=await r.json()
      if(!r.ok){setErr(d.error||"Correo o contraseña incorrectos");return}
      onLogin(d.agent,d.token)
    }catch{setErr("Error de conexión — intenta de nuevo")}
    finally{setLoading(false)}
  }
  return(
    <div style={{minHeight:"100svh",background:`linear-gradient(135deg,${C.navyDark},${C.navyMid})`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Inter,system-ui,sans-serif",padding:20}}>
      <div style={{background:C.surface,borderRadius:24,padding:"48px 40px",width:"100%",maxWidth:380,boxShadow:"0 32px 80px rgba(10,13,60,0.4)"}}>
        <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:36}}>
          <div style={{width:48,height:48,borderRadius:14,background:`linear-gradient(135deg,${C.navy},${C.purple})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,boxShadow:"0 6px 16px rgba(49,39,131,0.35)"}}>⚡</div>
          <div>
            <p style={{fontSize:20,fontWeight:800,color:C.text,letterSpacing:"-0.03em",lineHeight:1}}>Athenea</p>
            <p style={{fontSize:10,color:C.textMuted,textTransform:"uppercase",letterSpacing:"0.14em",marginTop:3}}>WhatsApp Intelligence · INDECAP</p>
          </div>
        </div>
        <p style={{fontSize:24,fontWeight:700,color:C.text,letterSpacing:"-0.02em",marginBottom:6}}>Bienvenido</p>
        <p style={{fontSize:14,color:C.textSub,marginBottom:28,lineHeight:1.5}}>Ingresa con tus credenciales de asesor.</p>
        <label style={{fontSize:11,fontWeight:600,color:C.textSub,textTransform:"uppercase",letterSpacing:"0.08em",display:"block",marginBottom:6}}>Correo electrónico</label>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="tu@indecap.edu.co" type="email" autoComplete="email"
          style={{width:"100%",padding:"12px 14px",border:`1.5px solid ${err?C.red:C.border}`,borderRadius:10,fontSize:14,outline:"none",color:C.text,background:C.bg,boxSizing:"border-box" as const,marginBottom:12,transition:"border-color 0.15s"}}
          onFocus={e=>e.target.style.borderColor=C.purple} onBlur={e=>e.target.style.borderColor=err?C.red:C.border}/>
        <label style={{fontSize:11,fontWeight:600,color:C.textSub,textTransform:"uppercase",letterSpacing:"0.08em",display:"block",marginBottom:6}}>Contraseña</label>
        <input type="password" value={pw} onChange={e=>setPw(e.target.value)} onKeyDown={e=>e.key==="Enter"&&submit()} placeholder="••••••••" autoComplete="current-password"
          style={{width:"100%",padding:"12px 14px",border:`1.5px solid ${err?C.red:C.border}`,borderRadius:10,fontSize:14,outline:"none",color:C.text,background:C.bg,boxSizing:"border-box" as const,marginBottom:err?8:20,transition:"border-color 0.15s"}}
          onFocus={e=>e.target.style.borderColor=C.purple} onBlur={e=>e.target.style.borderColor=err?C.red:C.border}/>
        {err&&<div style={{background:C.redLight,border:`1px solid ${C.red}33`,borderRadius:8,padding:"8px 12px",marginBottom:16}}><p style={{fontSize:12,color:C.red,fontWeight:500}}>{err}</p></div>}
        <button onClick={submit} disabled={loading||!email||!pw}
          style={{width:"100%",padding:"14px",background:loading||!email||!pw?"#C5C7DC":`linear-gradient(135deg,${C.navy},${C.purple})`,border:"none",borderRadius:12,color:"white",fontSize:14,fontWeight:700,cursor:loading||!email||!pw?"default":"pointer",boxShadow:loading||!email||!pw?"none":"0 6px 20px rgba(49,39,131,0.35)",transition:"all 0.2s"}}>
          {loading?"Verificando…":"Entrar al sistema"}
        </button>
        <p style={{fontSize:11,color:C.textMuted,textAlign:"center",marginTop:20}}>Sistema protegido · Solo personal INDECAP</p>
      </div>
    </div>
  )
}

// ── Botón de seguimiento con estados ──────────────────────────────────────
function BtnSeguimiento({conv,token,agentName,onDone,segCfg}:{conv:Conv;token:string;agentName?:string;onDone:()=>void;segCfg:{template:string;params:string[]}}){
  const [state,setState]=useState<"idle"|"loading"|"done"|"error">("idle")
  const send=async()=>{
    if(state!=="idle")return
    setState("loading")
    try{
      const r=await fetch("/api/bandeja/send",{
        method:"POST",
        headers:{"Content-Type":"application/json","Authorization":`Bearer ${token}`},
        body:JSON.stringify({to:conv.phone,template:segCfg.template,template_params:segCfg.params,conversation_id:conv.id,agent_name:agentName})
      })
      if(r.ok){setState("done");setTimeout(onDone,1500)}
      else setState("error")
    }catch{setState("error")}
    if(state!=="done") setTimeout(()=>setState("idle"),3000)
  }
  const label=state==="loading"?"Enviando…":state==="done"?"✓ Enviado":state==="error"?"✗ Error":"Seguimiento →"
  const bg=state==="done"?C.green:state==="error"?C.red:`linear-gradient(135deg,${C.navy},${C.purple})`
  return(
    <button onClick={e=>{e.stopPropagation();send()}} disabled={state==="loading"||state==="done"}
      style={{background:bg,color:"white",border:"none",borderRadius:8,padding:"7px 14px",fontSize:11,fontWeight:700,cursor:state==="idle"?"pointer":"default",flexShrink:0,whiteSpace:"nowrap" as const,transition:"all 0.2s",boxShadow:state==="idle"?"0 2px 8px rgba(49,39,131,0.25)":"none",minWidth:110,textAlign:"center" as const}}>
      {label}
    </button>
  )
}

// ── MAIN APP ───────────────────────────────────────────────────────────────
export default function BandejaApp(){
  const [agent,      setAgent]      = useState<Agent|null>(null)
  const [view,       setView]       = useState<"ahora"|"seguimiento">("ahora")
  const [progFilter, setProgFilter] = useState("all")
  const [convs,      setConvs]      = useState<Conv[]>([])
  const [active,     setActive]     = useState<Conv|null>(null)
  const [msgs,       setMsgs]       = useState<Msg[]>([])
  const [text,       setText]       = useState("")
  const [sending,    setSending]    = useState(false)
  const [recording,  setRecording]  = useState(false)
  const [showTpl,    setShowTpl]    = useState(false)
  const [rtStatus,   setRtStatus]   = useState<"connecting"|"connected"|"error">("connecting")
  const [mobileList, setMobileList] = useState(true)

  const activeRef    = useRef<Conv|null>(null)
  const tokenRef     = useRef("")
  const prevCounts   = useRef<Record<string,number>>({})
  const bottomRef    = useRef<HTMLDivElement>(null)
  const inputRef     = useRef<HTMLTextAreaElement>(null)
  const recRef       = useRef<MediaRecorder|null>(null)
  const chunks       = useRef<Blob[]>([])
  const lastLoadRef  = useRef(0)

  useEffect(()=>{
    const saved=localStorage.getItem("indecap_agent_v3")
    const token=localStorage.getItem("indecap_bandeja_token")||""
    tokenRef.current=token
    if(saved)try{setAgent(JSON.parse(saved))}catch{}
  },[])

  const handleLogin=(a:Agent,t:string)=>{
    localStorage.setItem("indecap_agent_v3",JSON.stringify(a))
    localStorage.setItem("indecap_bandeja_token",t)
    tokenRef.current=t; setAgent(a)
  }
  const logout=()=>{
    localStorage.removeItem("indecap_agent_v3")
    localStorage.removeItem("indecap_bandeja_token")
    tokenRef.current=""; setAgent(null)
  }
  const H=useCallback(()=>({
    "Content-Type":"application/json",
    "Authorization":`Bearer ${tokenRef.current}`
  }),[])

  const loadConvs=useCallback(async()=>{
    const now=Date.now()
    if(now-lastLoadRef.current<3000)return
    lastLoadRef.current=now
    const r=await fetch("/api/bandeja/conversations",{headers:{"Authorization":`Bearer ${tokenRef.current}`}})
    if(!r.ok)return
    const data:Conv[]=await r.json()
    if(!Array.isArray(data))return
    data.forEach(c=>{
      const prev=prevCounts.current[c.id]??c.unread_count
      if(c.unread_count>prev&&activeRef.current?.id!==c.id)playNotif()
      prevCounts.current[c.id]=c.unread_count
    })
    setConvs(data)
  },[])

  const loadMsgs=useCallback(async(convId:string,scroll=true)=>{
    const r=await fetch(`/api/bandeja/messages?conversation_id=${convId}`,{headers:{"Authorization":`Bearer ${tokenRef.current}`}})
    if(!r.ok)return
    const data:Msg[]=await r.json()
    if(!Array.isArray(data))return
    setMsgs(data)
    if(scroll)setTimeout(()=>bottomRef.current?.scrollIntoView({behavior:"smooth"}),80)
  },[])

  useEffect(()=>{
    if(!agent)return
    loadConvs()
    const ch=RT.channel("athenea-v2")
      .on("postgres_changes",{event:"INSERT",schema:"public",table:"messages"},()=>{
        loadConvs()
        if(activeRef.current)loadMsgs(activeRef.current.id,false)
      })
      .on("postgres_changes",{event:"UPDATE",schema:"public",table:"conversations"},()=>loadConvs())
      .subscribe((s,err)=>{
        if(s==="SUBSCRIBED")setRtStatus("connected")
        else if(s==="CHANNEL_ERROR"||s==="TIMED_OUT")setRtStatus("error")
        else setRtStatus("connecting")
        if(err)console.error("RT:",err)
      })
    const poll=setInterval(loadConvs,15000)
    return()=>{ch.unsubscribe();clearInterval(poll)}
  },[agent,loadConvs,loadMsgs])

  const openConv=useCallback((c:Conv)=>{
    activeRef.current=c; setActive(c); setMobileList(false); setShowTpl(false)
    prevCounts.current[c.id]=0
    setConvs(prev=>prev.map(x=>x.id===c.id?{...x,unread_count:0}:x))
    loadMsgs(c.id)
    setTimeout(()=>inputRef.current?.focus(),100)
  },[loadMsgs])

  const sendMsg=useCallback(async(message:string)=>{
    if(!message.trim()||!active||sending)return
    setText(""); setSending(true)
    try{
      const r=await fetch("/api/bandeja/send",{method:"POST",headers:H(),
        body:JSON.stringify({to:active.phone,message,conversation_id:active.id,agent_name:agent?.name})})
      if(r.ok)await loadMsgs(active.id,true)
      else setText(message)
    }catch{setText(message)}
    finally{setSending(false);inputRef.current?.focus()}
  },[active,agent,sending,loadMsgs,H])

  const sendTemplate=useCallback(async(name:string)=>{
    if(!active)return; setShowTpl(false)
    await fetch("/api/bandeja/send",{method:"POST",headers:H(),
      body:JSON.stringify({to:active.phone,template:name,conversation_id:active.id,agent_name:agent?.name})})
    await loadMsgs(active.id)
  },[active,agent,loadMsgs,H])

  const toggleRec=useCallback(async()=>{
    if(recording){recRef.current?.stop();setRecording(false);return}
    try{
      const stream=await navigator.mediaDevices.getUserMedia({audio:true})
      const rec=new MediaRecorder(stream,{mimeType:"audio/webm"})
      chunks.current=[];rec.ondataavailable=e=>chunks.current.push(e.data)
      rec.onstop=async()=>{
        stream.getTracks().forEach(t=>t.stop());if(!active)return
        const fd=new FormData()
        fd.append("file",new File(chunks.current,`audio_${Date.now()}.webm`,{type:"audio/webm"}))
        fd.append("to",active.phone);fd.append("conversation_id",active.id)
        if(agent?.name)fd.append("agent_name",agent.name)
        await fetch("/api/bandeja/send-audio",{method:"POST",headers:{"Authorization":`Bearer ${tokenRef.current}`},body:fd})
        await loadMsgs(active.id)
      }
      rec.start();recRef.current=rec;setRecording(true)
    }catch(e){console.error("Mic:",e)}
  },[recording,active,agent,loadMsgs])

  const updateStage=useCallback(async(stage:string)=>{
    if(!active)return
    await RT.from("conversations").update({stage}).eq("id",active.id)
    setActive(p=>p?{...p,stage}:p)
    setConvs(p=>p.map(c=>c.id===active.id?{...c,stage}:c))
  },[active])

  const updateStatus=useCallback(async(status:string)=>{
    if(!active)return
    await RT.from("conversations").update({status}).eq("id",active.id)
    setActive(p=>p?{...p,status}:p)
    setConvs(p=>p.map(c=>c.id===active.id?{...c,status}:c))
  },[active])

  const now=new Date()
  const today=new Date(now.getFullYear(),now.getMonth(),now.getDate())
  const yday=new Date(today.getTime()-86400000)
  const d2=new Date(today.getTime()-2*86400000)
  const week=new Date(today.getTime()-7*86400000)

  const byP=(l:Conv[])=>progFilter==="all"?l:l.filter(c=>pCfg(c.program)?.k===progFilter)
  const convAhora=byP(convs.filter(c=>c.status!=="cerrado"&&(c.last_message_direction==="incoming"||c.unread_count>0)))
  const seg={
    hoy:   byP(convs.filter(c=>{const t=new Date(c.last_message_at||0);return t>=today&&c.last_message_direction==="incoming"&&wMins(c.last_message_at)>=120&&c.status!=="cerrado"})),
    ayer:  byP(convs.filter(c=>{const t=new Date(c.last_message_at||0);return t>=yday&&t<today&&c.status!=="cerrado"})),
    dias2: byP(convs.filter(c=>{const t=new Date(c.last_message_at||0);return t>=d2&&t<yday&&c.status!=="cerrado"})),
    semana:byP(convs.filter(c=>{const t=new Date(c.last_message_at||0);return t>=week&&t<d2&&c.status!=="cerrado"})),
  }
  const segTotal=seg.hoy.length+seg.ayer.length+seg.dias2.length+seg.semana.length
  const pCounts:Record<string,number>={}
  convs.forEach(c=>{const k=pCfg(c.program)?.k||"other";pCounts[k]=(pCounts[k]||0)+1})
  const totalUnread=convs.reduce((s,c)=>s+c.unread_count,0)
  const grps=groupMsgs(msgs)

  if(!agent)return<Login onLogin={handleLogin}/>

  return(
    <div style={{height:"100svh",display:"flex",overflow:"hidden",fontFamily:"Inter,system-ui,sans-serif",background:C.bg,color:C.text}}>
      <style>{`*{box-sizing:border-box;margin:0;padding:0}::-webkit-scrollbar{width:4px;height:4px}::-webkit-scrollbar-thumb{background:${C.border};border-radius:2px}textarea,input,select,button{font-family:inherit}@media(max-width:768px){.sb{display:${mobileList?"flex":"none"} !important}.ch{display:${!mobileList?"flex":"none"} !important}}`}</style>

      {/* ── SIDEBAR ── */}
      <nav style={{width:72,display:"flex",flexDirection:"column",alignItems:"center",background:C.navyDark,padding:"20px 0 16px",gap:4,flexShrink:0}}>
        <div style={{width:42,height:42,borderRadius:12,background:`linear-gradient(135deg,${C.navyMid},${C.purple})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,marginBottom:20,boxShadow:"0 4px 16px rgba(0,0,0,0.4)"}}>⚡</div>
        {([["ahora","💬","Bandeja",convAhora.length,totalUnread],["seguimiento","⏰","Seguim.",segTotal,0]] as const).map(([id,icon,label,count,urgent])=>(
          <button key={id} onClick={()=>setView(id)} title={label}
            style={{width:50,height:50,borderRadius:14,border:"none",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:1,position:"relative",background:view===id?`${C.purple}40`:"transparent",borderLeft:`3px solid ${view===id?C.purple:"transparent"}`,transition:"all 0.15s"}}
            onMouseEnter={e=>{if(view!==id)(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.07)"}}
            onMouseLeave={e=>{if(view!==id)(e.currentTarget as HTMLElement).style.background="transparent"}}>
            <span style={{fontSize:19}}>{icon}</span>
            <span style={{fontSize:8,color:view===id?"rgba(255,255,255,0.9)":"rgba(255,255,255,0.4)",textTransform:"uppercase",letterSpacing:"0.05em",fontWeight:600}}>{label}</span>
            {(urgent>0||count>0)&&<span style={{position:"absolute",top:5,right:5,background:urgent>0?C.red:C.gold,color:"white",borderRadius:"50%",minWidth:16,height:16,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,border:`2px solid ${C.navyDark}`}}>{urgent||count}</span>}
          </button>
        ))}
        <div style={{flex:1}}/>
        <div title={`Realtime: ${rtStatus}`} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:3,marginBottom:8,cursor:"default"}}>
          <div style={{width:8,height:8,borderRadius:"50%",background:rtStatus==="connected"?C.green:rtStatus==="error"?C.red:C.amber,boxShadow:`0 0 6px ${rtStatus==="connected"?C.green:rtStatus==="error"?C.red:C.amber}`,transition:"all 0.5s"}}/>
          <span style={{fontSize:7,color:"rgba(255,255,255,0.3)",textTransform:"uppercase",letterSpacing:"0.04em"}}>{rtStatus==="connected"?"LIVE":rtStatus==="error"?"OFF":"..."}</span>
        </div>
        <button onClick={logout} title="Salir"
          style={{width:50,height:50,borderRadius:14,border:"none",cursor:"pointer",background:"transparent",fontSize:18,display:"flex",alignItems:"center",justifyContent:"center",opacity:0.35,transition:"opacity 0.15s"}}
          onMouseEnter={e=>(e.currentTarget as HTMLElement).style.opacity="0.8"}
          onMouseLeave={e=>(e.currentTarget as HTMLElement).style.opacity="0.35"}>🚪</button>
      </nav>

      {/* ── LISTA ── */}
      <div className="sb" style={{width:320,display:"flex",flexDirection:"column",background:C.surface,borderRight:`1px solid ${C.border}`,flexShrink:0}}>
        <div style={{padding:"16px 16px 10px",borderBottom:`1px solid ${C.borderLight}`}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10}}>
            <div>
              <p style={{fontSize:15,fontWeight:700,color:C.text,letterSpacing:"-0.01em"}}>{view==="ahora"?"Bandeja activa":"Seguimiento"}</p>
              <p style={{fontSize:11,color:C.textMuted}}>
                {view==="ahora"?`${convAhora.length} conversaciones${totalUnread>0?` · ${totalUnread} sin leer`:""}`:
                  `${segTotal} leads para recuperar`}
              </p>
            </div>
            <span style={{fontSize:9,fontWeight:700,color:C.textMuted,textTransform:"uppercase",letterSpacing:"0.1em",background:C.bg,padding:"3px 8px",borderRadius:8,border:`1px solid ${C.border}`}}>
              {agent.name.split(" ")[0]}
            </span>
          </div>
          <div style={{position:"relative"}}>
            <span style={{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",color:C.textMuted,fontSize:13,pointerEvents:"none"}}>🔍</span>
            <input placeholder="Buscar…"
              style={{width:"100%",padding:"8px 10px 8px 30px",background:C.bg,border:`1px solid ${C.border}`,borderRadius:8,fontSize:13,outline:"none",color:C.text}}
              onFocus={e=>e.target.style.borderColor=C.purple} onBlur={e=>e.target.style.borderColor=C.border}/>
          </div>
        </div>

        {/* Filtros */}
        <div style={{padding:"8px 12px 6px",display:"flex",gap:4,overflowX:"auto",scrollbarWidth:"none",borderBottom:`1px solid ${C.borderLight}`,flexShrink:0}}>
          <button onClick={()=>setProgFilter("all")}
            style={{padding:"3px 10px",borderRadius:20,border:`1px solid ${progFilter==="all"?C.purple:C.border}`,cursor:"pointer",background:progFilter==="all"?C.purpleLight:"transparent",color:progFilter==="all"?C.purple:C.textMuted,fontSize:11,fontWeight:600,whiteSpace:"nowrap",flexShrink:0}}>
            Todos
          </button>
          {PROGS.map(p=>{const cnt=pCounts[p.k]||0;if(cnt===0)return null;const a=progFilter===p.k;return(
            <button key={p.k} onClick={()=>setProgFilter(a?"all":p.k)}
              style={{padding:"3px 10px",borderRadius:20,border:`1px solid ${a?p.c:C.border}`,cursor:"pointer",background:a?p.bg:"transparent",color:a?p.c:C.textMuted,fontSize:11,fontWeight:600,whiteSpace:"nowrap",flexShrink:0,display:"flex",alignItems:"center",gap:3}}>
              {p.s}<span style={{background:p.c,color:"white",borderRadius:8,padding:"0 4px",fontSize:9}}>{cnt}</span>
            </button>
          )})}
        </div>

        {/* Conversaciones */}
        <div style={{flex:1,overflowY:"auto"}}>

          {/* MODO AHORA */}
          {view==="ahora"&&(
            convAhora.length===0
              ?<Empty icon="✅" title="Al día" sub="Nadie esperando respuesta"/>
              :convAhora.map(c=>{
                const w=wMins(c.last_message_at),border=wBorder(w,c.last_message_direction)
                const pc=pCfg(c.program),name=c.name||fPhone(c.phone)
                const prev=clean(c.last_message||"")
                const isActive=active?.id===c.id,isUnread=c.unread_count>0&&!isActive
                return(
                  <div key={c.id} onClick={()=>openConv(c)}
                    style={{display:"flex",gap:12,padding:"11px 14px 11px 11px",cursor:"pointer",
                      borderLeft:`3px solid ${isActive?C.purple:border}`,
                      background:isActive?C.purpleLight:isUnread?"#F0F2FF":"transparent",
                      borderBottom:`1px solid ${C.borderLight}`,transition:"background 0.12s"}}
                    onMouseEnter={e=>{if(!isActive&&!isUnread)(e.currentTarget as HTMLElement).style.background=C.bg}}
                    onMouseLeave={e=>{if(!isActive&&!isUnread)(e.currentTarget as HTMLElement).style.background="transparent"}}>
                    <div style={{position:"relative",flexShrink:0}}>
                      <div style={{width:44,height:44,borderRadius:"50%",background:av(c.phone),display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:16,fontWeight:700}}>{name.charAt(0).toUpperCase()}</div>
                      {c.unread_count>0&&<span style={{position:"absolute",top:-3,right:-3,background:C.red,color:"white",borderRadius:"50%",minWidth:19,height:19,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:800,border:`2px solid ${isUnread?"#F0F2FF":C.surface}`}}>{c.unread_count}</span>}
                    </div>
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:2}}>
                        <span style={{fontSize:14,fontWeight:isUnread?700:500,color:isUnread?C.navy:C.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1,marginRight:8}}>{name}</span>
                        {c.last_message_direction==="incoming"&&w>0
                          ?<span style={{fontSize:10,color:border==="transparent"?C.textMuted:border,fontWeight:700,flexShrink:0,background:border===C.red?C.redLight:border===C.amber?C.amberLight:border===C.gold?C.goldLight:"transparent",padding:"1px 6px",borderRadius:8}}>{wLabel(w)}</span>
                          :<span style={{fontSize:11,color:C.textMuted,flexShrink:0}}>{fTime(c.last_message_at)}</span>}
                      </div>
                      <p style={{fontSize:12,color:isUnread?C.textSub:C.textMuted,fontWeight:isUnread?500:400,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",marginBottom:4}}>
                        {prev.startsWith("[Imagen]")||prev.startsWith("🖼")?"📷 Imagen":prev.startsWith("[Audio]")||prev.startsWith("🎵")?"🎵 Audio":prev||""}
                      </p>
                      <div style={{display:"flex",gap:4}}>
                        {pc&&<span style={{fontSize:10,background:pc.bg,color:pc.c,padding:"1px 7px",borderRadius:8,fontWeight:600,border:`1px solid ${pc.c}25`}}>{pc.s}</span>}
                        {c.stage&&<span style={{fontSize:10,color:C.textMuted,background:C.bg,padding:"1px 7px",borderRadius:8,border:`1px solid ${C.border}`}}>{c.stage}</span>}
                        {c.referral_source&&<span style={{fontSize:10,color:C.purple,background:C.purpleLight,padding:"1px 6px",borderRadius:8}}>📢</span>}
                      </div>
                    </div>
                  </div>
                )
              })
          )}

          {/* MODO SEGUIMIENTO */}
          {view==="seguimiento"&&(
            <>
              {segTotal>0&&(
                <div style={{padding:"10px 14px 6px",background:C.bg,borderBottom:`1px solid ${C.border}`}}>
                  <p style={{fontSize:11,color:C.textMuted,lineHeight:1.5}}>
                    Un clic en <strong style={{color:C.navy}}>Seguimiento →</strong> envía automáticamente el mensaje de reactivación de julio a ese lead. Aparece en su WhatsApp al instante.
                  </p>
                </div>
              )}
              {[
                {label:"Hoy — más de 2h sin respuesta", list:seg.hoy,    dot:C.red,   bg:C.redLight},
                {label:"Ayer sin convertir",             list:seg.ayer,   dot:C.amber, bg:C.amberLight},
                {label:"Hace 2 días",                    list:seg.dias2,  dot:C.gold,  bg:C.goldLight},
                {label:"Esta semana",                    list:seg.semana, dot:C.textMuted, bg:C.bg},
              ].map(g=>{
                if(!g.list.length)return null
                return(
                  <div key={g.label}>
                    <div style={{padding:"7px 14px",background:g.bg,display:"flex",alignItems:"center",gap:8,borderBottom:`1px solid ${C.border}`}}>
                      <div style={{width:7,height:7,borderRadius:"50%",background:g.dot,flexShrink:0}}/>
                      <p style={{fontSize:10,color:g.dot,fontWeight:700,textTransform:"uppercase" as const,letterSpacing:"0.07em",flex:1}}>{g.label}</p>
                      <span style={{fontSize:10,color:C.textMuted,background:C.surface,borderRadius:8,padding:"1px 7px",border:`1px solid ${C.border}`}}>{g.list.length}</span>
                    </div>
                    {g.list.map(c=>{
                      const pc=pCfg(c.program),name=c.name||fPhone(c.phone)
                      const prev=clean(c.last_message||"")
                      return(
                        <div key={c.id} style={{padding:"10px 14px",borderBottom:`1px solid ${C.borderLight}`,display:"flex",alignItems:"center",gap:10,transition:"background 0.12s"}}
                          onMouseEnter={e=>(e.currentTarget as HTMLElement).style.background=C.bg}
                          onMouseLeave={e=>(e.currentTarget as HTMLElement).style.background="transparent"}>
                          <div onClick={()=>openConv(c)} style={{flex:1,minWidth:0,cursor:"pointer"}}>
                            <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:3}}>
                              <span style={{fontSize:13,fontWeight:600,color:C.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{name}</span>
                              {pc&&<span style={{fontSize:10,background:pc.bg,color:pc.c,padding:"1px 6px",borderRadius:8,fontWeight:600,flexShrink:0}}>{pc.s}</span>}
                            </div>
                            <p style={{fontSize:11,color:C.textMuted,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>"{prev.slice(0,50)}"</p>
                            <p style={{fontSize:10,color:C.textMuted,marginTop:2}}>{fTime(c.last_message_at)}</p>
                            <p style={{fontSize:9,color:C.textMuted,marginTop:1}}>
                              {cfgSeguimiento(pCfg(c.program)).template==="reactivacion_julio_indecap"?"📢 Reactivación julio":pCfg(c.program)?.s?`📩 Seg. ${pCfg(c.program)?.s}`:"📢 Reactivación julio"}
                            </p>
                          </div>
                          <BtnSeguimiento
                            conv={c}
                            token={tokenRef.current}
                            agentName={agent?.name}
                            segCfg={cfgSeguimiento(pCfg(c.program))}
                            onDone={()=>{
                              setConvs(prev=>prev.map(x=>x.id===c.id?{...x,status:"abierto",last_message_direction:"outgoing"}:x))
                              setTimeout(loadConvs,1500)
                            }}
                          />
                        </div>
                      )
                    })}
                  </div>
                )
              })}
              {segTotal===0&&<Empty icon="🎉" title="Sin pendientes" sub="Todos los leads han sido contactados"/>}
            </>
          )}
        </div>
      </div>

      {/* ── CHAT ── */}
      <div className="ch" style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden",background:C.surface}}>
        {!active?(
          <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:14,background:C.bg,padding:20}}>
            <div style={{width:80,height:80,borderRadius:22,background:`linear-gradient(135deg,${C.navyDark},${C.purple})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:36,boxShadow:"0 12px 32px rgba(49,39,131,0.3)"}}>⚡</div>
            <div style={{textAlign:"center"}}>
              <p style={{fontSize:24,fontWeight:800,color:C.text,letterSpacing:"-0.02em",marginBottom:6}}>Athenea API</p>
              <p style={{fontSize:14,color:C.textSub,maxWidth:260,lineHeight:1.65}}>
                {view==="ahora"&&convAhora.length>0?`${convAhora.length} conversación${convAhora.length>1?"es":""} esperando`:view==="seguimiento"&&segTotal>0?`${segTotal} leads para recuperar`:"Selecciona una conversación"}
              </p>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:6,background:C.surface,padding:"6px 14px",borderRadius:20,border:`1px solid ${C.border}`}}>
              <div style={{width:6,height:6,borderRadius:"50%",background:rtStatus==="connected"?C.green:C.amber}}/>
              <span style={{fontSize:11,color:C.textMuted,fontWeight:500}}>{rtStatus==="connected"?"Tiempo real conectado":"Reconectando…"}</span>
            </div>
          </div>
        ):(
          <>
            {/* Header */}
            <div style={{display:"flex",alignItems:"center",gap:12,padding:"10px 20px",background:C.surface,borderBottom:`1px solid ${C.border}`,minHeight:64,flexShrink:0}}>
              <button onClick={()=>{setActive(null);activeRef.current=null;setMobileList(true)}} style={{background:"none",border:"none",color:C.textMuted,fontSize:20,cursor:"pointer",padding:0,flexShrink:0}}>←</button>
              <div style={{width:40,height:40,borderRadius:"50%",background:av(active.phone),display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:16,fontWeight:700,flexShrink:0}}>
                {(active.name||active.phone).charAt(0).toUpperCase()}
              </div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
                  <p style={{fontSize:15,fontWeight:700,color:C.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",letterSpacing:"-0.01em"}}>
                    {active.name||fPhone(active.phone)}
                  </p>
                  {pCfg(active.program)&&<span style={{fontSize:10,background:pCfg(active.program)!.bg,color:pCfg(active.program)!.c,padding:"2px 8px",borderRadius:8,fontWeight:700,flexShrink:0}}>{pCfg(active.program)!.s}</span>}
                  {active.referral_source&&<span style={{fontSize:10,background:C.purpleLight,color:C.purple,padding:"2px 8px",borderRadius:8,fontWeight:600,flexShrink:0}}>📢 Anuncio</span>}
                </div>
                <p style={{fontSize:11,color:C.textMuted}}>{active.phone}</p>
              </div>
              <div style={{display:"flex",gap:6,flexShrink:0,alignItems:"center"}}>
                <select value={active.stage||""} onChange={e=>updateStage(e.target.value)}
                  style={{background:C.bg,border:`1px solid ${C.border}`,color:C.text,borderRadius:8,padding:"5px 8px",fontSize:11,cursor:"pointer",outline:"none",fontWeight:500}}>
                  <option value="">Sin etapa</option>
                  <option value="NUEVO">🔵 Nuevo</option>
                  <option value="INTERESADO">🟠 Interesado</option>
                  <option value="HOT">🔴 HOT</option>
                  <option value="INSCRITO">🟣 Inscrito</option>
                  <option value="MATRICULADO">🟢 Matriculado</option>
                  <option value="DESCARTADO">⚫ Descartado</option>
                </select>
                <select value={active.status} onChange={e=>updateStatus(e.target.value)}
                  style={{background:C.bg,border:`1px solid ${C.border}`,color:C.text,borderRadius:8,padding:"5px 8px",fontSize:11,cursor:"pointer",outline:"none",fontWeight:500}}>
                  <option value="pendiente">🟡 Pendiente</option>
                  <option value="abierto">🟢 Atendido</option>
                  <option value="cerrado">✅ Cerrado</option>
                </select>
                <button onClick={()=>setShowTpl(!showTpl)}
                  style={{background:showTpl?C.purpleLight:C.bg,border:`1px solid ${showTpl?C.purple:C.border}`,color:showTpl?C.purple:C.textMuted,borderRadius:8,padding:"5px 12px",fontSize:11,cursor:"pointer",fontWeight:600,whiteSpace:"nowrap"}}>
                  📋 Templates
                </button>
              </div>
            </div>

            {/* Templates */}
            {showTpl&&(
              <div style={{background:C.bg,borderBottom:`1px solid ${C.border}`,padding:"10px 16px",flexShrink:0}}>
                <p style={{fontSize:10,color:C.textMuted,textTransform:"uppercase" as const,letterSpacing:"0.1em",marginBottom:8,fontWeight:700}}>Plantillas aprobadas por Meta</p>
                <div style={{display:"flex",flexWrap:"wrap" as const,gap:6}}>
                  {TEMPLATES.map(t=>(
                    <button key={t.name} onClick={()=>sendTemplate(t.name)}
                      style={{background:C.surface,border:`1px solid ${C.border}`,color:C.text,borderRadius:8,padding:"7px 14px",fontSize:12,cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontWeight:500,transition:"all 0.12s"}}
                      onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor=C.purple;(e.currentTarget as HTMLElement).style.color=C.purple;(e.currentTarget as HTMLElement).style.background=C.purpleLight}}
                      onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor=C.border;(e.currentTarget as HTMLElement).style.color=C.text;(e.currentTarget as HTMLElement).style.background=C.surface}}>
                      {t.icon} {t.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Mensajes */}
            <div style={{flex:1,overflowY:"auto",padding:"16px",background:C.bg}}>
              {grps.map(g=>(
                <div key={g.date}>
                  <div style={{textAlign:"center",margin:"12px 0 10px"}}>
                    <span style={{background:C.surface,color:C.textMuted,fontSize:11,padding:"4px 14px",borderRadius:20,display:"inline-block",border:`1px solid ${C.border}`,fontWeight:500}}>{fDate(g.msgs[0].created_at)}</span>
                  </div>
                  {g.msgs.map(m=>{
                    const out=m.direction==="outgoing",auto=isBot(m.body),body=clean(m.body)
                    const html=body.replace(/\*(.*?)\*/g,"<strong>$1</strong>").replace(/\n/g,"<br/>")
                    return(
                      <div key={m.id} style={{display:"flex",justifyContent:out?"flex-end":"flex-start",marginBottom:5}}>
                        <div style={{maxWidth:"68%",padding:"10px 14px 7px",borderRadius:out?"16px 4px 16px 16px":"4px 16px 16px 16px",background:out?(auto?C.bubbleAuto:C.bubbleOut):C.bubbleIn,boxShadow:"0 1px 4px rgba(0,0,0,0.07)"}}>
                          {auto&&<p style={{fontSize:10,color:"#60a5fa",marginBottom:4,fontWeight:700}}>🤖 Automático</p>}
                          {out&&m.agent_name&&!auto&&<p style={{fontSize:10,color:"rgba(255,255,255,0.55)",marginBottom:4,fontWeight:500}}>👤 {m.agent_name}</p>}
                          {m.media_url&&m.media_type?.startsWith("image")&&<img src={m.media_url} alt="" style={{maxWidth:"100%",borderRadius:8,marginBottom:6,display:"block",cursor:"pointer"}} onClick={()=>window.open(m.media_url,"_blank")}/>}
                          {m.media_url&&m.media_type?.startsWith("audio")&&<audio controls src={m.media_url} style={{width:"100%",marginBottom:6,maxWidth:260}}/>}
                          {body&&<p style={{color:out?(auto?C.text:"white"):C.text,fontSize:14,lineHeight:1.55,wordBreak:"break-word",whiteSpace:"pre-wrap"}} dangerouslySetInnerHTML={{__html:html}}/>}
                          <div style={{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:4,marginTop:5}}>
                            <span style={{fontSize:10,color:out?(auto?C.textMuted:"rgba(255,255,255,0.5)"):C.textMuted}}>{fTime(m.created_at)}</span>
                            {out&&<span style={{fontSize:12,color:m.status==="read"?"#60A5FA":out&&!auto?"rgba(255,255,255,0.45)":C.textMuted}}>✓✓</span>}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              ))}
              <div ref={bottomRef}/>
            </div>

            {/* Quick replies */}
            <div style={{padding:"8px 16px",background:C.surface,borderTop:`1px solid ${C.borderLight}`,display:"flex",gap:5,overflowX:"auto",scrollbarWidth:"none",flexShrink:0}}>
              {QUICK.map((q,i)=>(
                <button key={i} onClick={()=>{setText(q.text);inputRef.current?.focus()}}
                  style={{background:C.bg,border:`1px solid ${C.border}`,color:C.textSub,borderRadius:20,padding:"5px 12px",fontSize:11,cursor:"pointer",whiteSpace:"nowrap",flexShrink:0,fontWeight:500,display:"flex",alignItems:"center",gap:4,transition:"all 0.12s"}}
                  onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor=C.purple;(e.currentTarget as HTMLElement).style.color=C.purple;(e.currentTarget as HTMLElement).style.background=C.purpleLight}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor=C.border;(e.currentTarget as HTMLElement).style.color=C.textSub;(e.currentTarget as HTMLElement).style.background=C.bg}}>
                  {q.icon} {q.label}
                </button>
              ))}
            </div>

            {/* Send bar */}
            <div style={{padding:"12px 16px",background:C.surface,borderTop:`1px solid ${C.border}`,flexShrink:0}}>
              {recording&&(
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8,padding:"6px 12px",background:C.redLight,borderRadius:8,border:`1px solid ${C.red}25`}}>
                  <span style={{width:8,height:8,borderRadius:"50%",background:C.red,display:"inline-block"}}/>
                  <span style={{color:C.red,fontSize:12,fontWeight:500}}>Grabando… toca ⏹ para enviar</span>
                </div>
              )}
              <div style={{display:"flex",alignItems:"flex-end",gap:10}}>
                <div style={{flex:1,background:C.bg,border:`1px solid ${C.border}`,borderRadius:14,padding:"10px 14px",transition:"border-color 0.15s"}}
                  onClick={()=>inputRef.current?.focus()}>
                  <textarea ref={inputRef} value={text} onChange={e=>setText(e.target.value)}
                    onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();sendMsg(text)}}}
                    placeholder="Escribe un mensaje… (Enter para enviar)" rows={1}
                    style={{width:"100%",background:"none",border:"none",color:C.text,fontSize:14,outline:"none",maxHeight:120,overflowY:"auto",lineHeight:1.55,resize:"none"}}/>
                </div>
                {text.trim()
                  ?<button onClick={()=>sendMsg(text)} disabled={sending}
                    style={{width:46,height:46,borderRadius:"50%",border:"none",background:sending?"#C5C7DC":`linear-gradient(135deg,${C.navy},${C.purple})`,color:"white",fontSize:17,cursor:sending?"default":"pointer",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:sending?"none":"0 4px 16px rgba(49,39,131,0.35)",transition:"all 0.2s"}}
                    onMouseEnter={e=>{if(!sending)(e.currentTarget as HTMLElement).style.transform="scale(1.06)"}}
                    onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="scale(1)"}}>
                    {sending?"⏳":"➤"}
                  </button>
                  :<button onClick={toggleRec}
                    style={{width:46,height:46,borderRadius:"50%",border:`1px solid ${recording?C.red:C.border}`,background:recording?C.red:C.bg,color:recording?"white":C.textMuted,fontSize:17,cursor:"pointer",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"}}>
                    {recording?"⏹":"🎤"}
                  </button>
                }
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function Empty({icon,title,sub}:{icon:string;title:string;sub:string}){
  return(
    <div style={{padding:40,textAlign:"center",color:C.textMuted}}>
      <p style={{fontSize:32,marginBottom:10}}>{icon}</p>
      <p style={{fontSize:14,fontWeight:600,color:C.textSub,marginBottom:4}}>{title}</p>
      <p style={{fontSize:12}}>{sub}</p>
    </div>
  )
}