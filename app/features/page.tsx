import type { Metadata } from "next"
import FeaturesClient from "./FeaturesClient"

export const metadata: Metadata = {
  title: "PURE-Studio Features",
  description: "Explore the powerful features of PURE-Studio",
}

export default function Features() {
  return <FeaturesClient />
}
