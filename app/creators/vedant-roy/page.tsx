import type { Metadata } from "next"
import VedantPortfolioClient from "./VedantPortfolioClient"

export const metadata: Metadata = {
  title: "Vedant Roy - Creator's Portfolio",
  description: "Portfolio of Vedant Roy, Social Expert and Data Analyst.",
}

export default function VedantPortfolio() {
  return <VedantPortfolioClient />
}
