import type { Metadata } from "next"
import CreatorsClient from "./CreatorsClient"

export const metadata: Metadata = {
  title: "Creators - PURE-Studio",
  description: "Meet the creators behind PURE-Studio and our other projects.",
}

export default function Creators() {
  return <CreatorsClient />
}
