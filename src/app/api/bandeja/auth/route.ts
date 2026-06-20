// src/app/api/bandeja/auth/route.ts
// Verifica credenciales server-side — contraseñas NUNCA llegan al browser
import { NextRequest, NextResponse } from "next/server"
import { createHmac }                from "crypto"

const SECRET = process.env.BANDEJA_SECRET!

function createToken(email: string): string {
  const payload = `${email}:${Date.now()}`
  const sig     = createHmac("sha256", SECRET).update(payload).digest("hex")
  return Buffer.from(`${payload}:${sig}`).toString("base64url")
}

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()
    if (!email || !password)
      return NextResponse.json({ error: "Datos incompletos" }, { status: 400 })

    const e = email.toLowerCase().trim()

    // Contraseñas en variables de entorno — nunca en el código
    const pwMap: Record<string, string | undefined> = {
      "camilo@indecap.edu.co": process.env.BANDEJA_PW_CAMILO,
      "vanesa@indecap.edu.co": process.env.BANDEJA_PW_VANESA,
    }

    const agentMap: Record<string, { name: string; color: string }> = {
      "camilo@indecap.edu.co": { name: "Camilo",         color: "#312783" },
      "vanesa@indecap.edu.co": { name: "Vanesa Sánchez", color: "#0F6E56" },
    }

    if (!pwMap[e] || pwMap[e] !== password || !agentMap[e])
      return NextResponse.json({ error: "Correo o contraseña incorrectos" }, { status: 401 })

    const token = createToken(e)

    return NextResponse.json({
      token,
      agent: { email: e, name: agentMap[e].name, color: agentMap[e].color },
    })
  } catch {
    return NextResponse.json({ error: "Error interno" }, { status: 500 })
  }
}
