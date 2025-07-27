import type { Metadata } from "next"
import ShauryaPortfolioClient from "./ShauryaPortfolioClient"

export const metadata: Metadata = {
  title: "Shaurya Fatania - Creator's Portfolio",
  description: "Portfolio of Shaurya Fatania, Prompt Engineer and Frontend Specialist.",
}

export default function ShauryaPortfolio() {
  return <ShauryaPortfolioClient />
}
