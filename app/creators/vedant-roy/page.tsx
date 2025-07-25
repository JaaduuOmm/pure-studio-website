import type { Metadata } from "next"
import VedantPortfolioClient from "./VedantPortfolioClient"

export const metadata: Metadata = {
  title: "Vedant Roy's Portfolio | PURE-Studio",
  description: "Portfolio of Vedant Roy, co-creator of PURE-Studio.",
}

export default function VedantPortfolioPage() {
  return <VedantPortfolioClient />
}
