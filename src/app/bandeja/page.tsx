"use client"
import dynamic from "next/dynamic"

const Bandeja = dynamic(() => import("./BandejaApp"), { ssr: false })

export default function BandejaPage() {
  return <Bandeja />
}
