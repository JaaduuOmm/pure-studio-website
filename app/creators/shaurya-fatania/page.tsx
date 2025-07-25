import type { Metadata } from "next"
import ShauryaPortfolioClient from "./ShauryaPortfolioClient"

export const metadata: Metadata = {
  title: "Shaurya Fatania's Portfolio | PURE-Studio",
  description: "Portfolio of Shaurya Fatania, co-creator of PURE-Studio.",
}

export default function ShauryaPortfolioPage() {
  return <ShauryaPortfolioClient />
}
