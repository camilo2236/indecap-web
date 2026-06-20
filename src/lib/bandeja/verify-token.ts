// src/lib/bandeja/verify-token.ts
// Utilidad compartida para verificar tokens de la bandeja
import { createHmac } from "crypto"

export function verifyBandejaToken(token: string): string | null {
  try {
    const SECRET  = process.env.BANDEJA_SECRET
    if (!SECRET) return null

    const decoded = Buffer.from(token, "base64url").toString("utf8")
    const lastColon = decoded.lastIndexOf(":")
    const payload = decoded.slice(0, lastColon)
    const sig     = decoded.slice(lastColon + 1)

    const expected = createHmac("sha256", SECRET).update(payload).digest("hex")
    if (sig !== expected) return null

    // Verificar expiración — token válido por 24 horas
    const parts    = payload.split(":")
    const ts       = parseInt(parts[1])
    const age      = Date.now() - ts
    if (age > 24 * 60 * 60 * 1000) return null

    return parts[0] // email del agente
  } catch { return null }
}
