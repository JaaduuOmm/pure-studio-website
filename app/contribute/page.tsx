import type { Metadata } from "next"
import ContributeClient from "./ContributeClient"

export const metadata: Metadata = {
  title: "Contribute to PURE-Studio",
  description: "Learn how you can contribute to the development of PURE-Studio",
}

export default function Contribute() {
  return <ContributeClient />
}
