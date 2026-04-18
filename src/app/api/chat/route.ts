import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { messages, system } = body

  const contents = messages.map((m: { role: string; content: string }) => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }],
  }))

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: system ? { parts: [{ text: system }] } : undefined,
        contents,
        generationConfig: { maxOutputTokens: 300 },
      }),
    }
  )

  const data = await response.json()
  console.log('GEMINI RESPONSE:', JSON.stringify(data, null, 2))
  
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Hmm...'
  return NextResponse.json({ content: [{ type: 'text', text }] })
}