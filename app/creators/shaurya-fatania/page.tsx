import ShauryaPortfolioClient from "./ShauryaPortfolioClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shaurya Fatania - Portfolio",
  description: "The personal portfolio of Shaurya Fatania, Prompt Engineer and Frontend Specialist.",
}

export default function ShauryaFataniaPage() {
  return <ShauryaPortfolioClient />
}
