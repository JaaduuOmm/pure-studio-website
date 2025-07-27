import VedantPortfolioClient from "./VedantPortfolioClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vedant Roy - Portfolio",
  description: "The personal portfolio of Vedant Roy, Social Expert and Data Analyst.",
}

export default function VedantRoyPage() {
  return <VedantPortfolioClient />
}
