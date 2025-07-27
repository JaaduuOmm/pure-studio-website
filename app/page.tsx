import type { Metadata } from "next"
import HomeClient from "./HomeClient"

export const metadata: Metadata = {
  title: "PURE STUDIO - Professional Universal Rich Editor",
  description: "Your professional universal rich editor, designed for seamless content creation.",
}

export default function HomePage() {
  return <HomeClient />
}
