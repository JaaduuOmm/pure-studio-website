import type { Metadata } from "next"
import ReleaseInfoClient from "./ReleaseInfoClient"

export const metadata: Metadata = {
  title: "PURE-Studio Release Information",
  description: "Get the latest release information for PURE-Studio",
}

export default function ReleaseInfo() {
  return <ReleaseInfoClient />
}
