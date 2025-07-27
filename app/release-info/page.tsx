import ReleaseInfoClient from "./ReleaseInfoClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PURE STUDIO - Release Info",
  description: "Stay updated with the latest release information and development status of our projects.",
}

export default function ReleaseInfoPage() {
  return <ReleaseInfoClient />
}
