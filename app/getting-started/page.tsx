import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Getting Started with PURE-Studio",
  description: "Learn how to set up and start using PURE-Studio",
}

export default function GettingStarted() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Getting Started</h1>
      <p className="text-lg text-muted-foreground">This section is currently under development.</p>
      <p className="text-2xl font-semibold text-primary">Coming Soon!</p>
    </div>
  )
}
