import type { Metadata } from "next"
import AroAIClient from "./AroAIClient"

export const metadata: Metadata = {
  title: "ARO AI - Autonomous Reasoning Operator AI",
  description: "Learn about ARO AI, our custom-trained, independent AI model.",
}

export default function AroAIPage() {
  return <AroAIClient />
}
