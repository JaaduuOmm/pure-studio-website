import type { Metadata } from "next"
import CreatorsClient from "./CreatorsClient"

export const metadata: Metadata = {
  title: "Creator's Portfolio | PURE-Studio",
  description: "Meet the creators of PURE-Studio: Shaurya Fatania and Vedant Roy.",
}

export default function CreatorsPage() {
  return <CreatorsClient />
}
