import { NextRequest, NextResponse } from 'next/server'

const PROTECTED_PATHS = ['/academia', '/induccion']
const COOKIE_NAME = 'indecap_auth'

export function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtected = PROTECTED_PATHS.some(p => path.startsWith(p))
  if (!isProtected) return NextResponse.next()

  const password = process.env.ACADEMY_PASSWORD
  const cookie = req.cookies.get(COOKIE_NAME)
  if (cookie?.value === password) return NextResponse.next()

  const attemptedPwd = req.nextUrl.searchParams.get('pwd')
  if (attemptedPwd && attemptedPwd === password) {
    const res = NextResponse.redirect(new URL(path, req.url))
    res.cookies.set(COOKIE_NAME, password!, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 8,
      sameSite: 'lax',
    })
    return res
  }

  const loginHTML = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>INDECAP · Acceso restringido</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:system-ui,sans-serif;background:#f5fafc;display:flex;align-items:center;justify-content:center;min-height:100vh}
.card{background:#fff;border-radius:16px;padding:2.5rem 2rem;width:100%;max-width:360px;box-shadow:0 8px 40px rgba(26,8,110,0.10);text-align:center}
.logo{font-size:1.25rem;font-weight:700;color:#1a086e;margin-bottom:4px}
.logo span{color:#805600}
.sub{font-size:13px;color:#42474e;margin-bottom:2rem;line-height:1.5}
input{width:100%;padding:11px 14px;border:1px solid rgba(66,71,78,0.2);border-radius:9px;font-size:14px;margin-bottom:12px;outline:none;transition:border-color 0.2s}
input:focus{border-color:#1a086e;box-shadow:0 0 0 3px rgba(26,8,110,0.08)}
button{width:100%;padding:11px;background:linear-gradient(135deg,#1a086e,#312783);color:#fff;border:none;border-radius:9px;font-size:14px;font-weight:600;cursor:pointer;transition:opacity 0.2s}
button:hover{opacity:0.9}
.err{color:#dc2626;font-size:12.5px;margin-top:8px;display:none}
</style>
</head>
<body>
<div class="card">
  <div class="logo">IN<span>D</span>ECAP</div>
  <div class="sub">Plataforma de formación interna<br>Acceso restringido al equipo</div>
  <form id="f" onsubmit="login(event)">
    <input type="password" id="pwd" placeholder="Contraseña de acceso" autofocus autocomplete="current-password">
    <button type="submit">Ingresar</button>
    <div class="err" id="err">Contraseña incorrecta. Intenta de nuevo.</div>
  </form>
</div>
<script>
async function login(e) {
  e.preventDefault()
  const pwd = document.getElementById('pwd').value
  const url = window.location.pathname + '?pwd=' + encodeURIComponent(pwd)
  const res = await fetch(url, { method: 'GET', redirect: 'follow' })
  if (res.ok) { window.location.href = res.url || window.location.pathname }
  else { document.getElementById('err').style.display = 'block' }
}
</script>
</body>
</html>`

  return new NextResponse(loginHTML, {
    status: 401,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}

export const config = {
  matcher: ['/academia', '/academia/:path*', '/induccion', '/induccion/:path*'],
}