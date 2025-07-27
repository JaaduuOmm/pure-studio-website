import FeaturesClient from "./FeaturesClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Features - PURE STUDIO",
  description: "Explore the powerful features of PURE STUDIO, designed to enhance your productivity and creativity.",
}

export default function FeaturesPage() {
  return <FeaturesClient />
}
