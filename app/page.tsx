import HomeClient from "./HomeClient"

export const metadata = {
  title: "Welcome - PURE Studio",
  description: "Explore PURE Studio, PromptOS, and Collabify - innovative projects for developers and creators.",
}

export default function HomePage() {
  return (
    <main className="flex-1 p-4 md:p-6">
      <HomeClient />
    </main>
  )
}
