import HomeClient from "./HomeClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PURE STUDIO - Home",
  description: "Welcome to PURE STUDIO, your professional universal rich editor.",
}

export default function HomePage() {
  return <HomeClient />
}
