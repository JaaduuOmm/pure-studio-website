import type { Metadata } from "next"
import ContributeClient from "./ContributeClient"

export const metadata: Metadata = {
  title: "Contribute to PURE-Studio",
  description: "Learn how to contribute to the PURE-Studio open-source project.",
}

export default function Contribute() {
  return <ContributeClient />
}
