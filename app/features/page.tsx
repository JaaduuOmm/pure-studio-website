import FeaturesClient from "./FeaturesClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PURE STUDIO - Features",
  description: "Explore the powerful features of PURE STUDIO and our other projects.",
}

export default function FeaturesPage() {
  return <FeaturesClient />
}
