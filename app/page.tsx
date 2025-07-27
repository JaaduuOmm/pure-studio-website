import HomeClient from "./HomeClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PURE STUDIO - Universal Rich Editor",
  description: "Your professional universal rich editor, designed for seamless content creation.",
}

export default function HomePage() {
  return <HomeClient />
}
