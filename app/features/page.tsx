import FeaturesClient from "./FeaturesClient"

export const metadata = {
  title: "Features - PURE Studio",
  description: "Explore the powerful features of PURE Studio, your professional universal rich editor.",
}

export default function FeaturesPage() {
  return (
    <main className="flex-1 p-4 md:p-6">
      <FeaturesClient />
    </main>
  )
}
