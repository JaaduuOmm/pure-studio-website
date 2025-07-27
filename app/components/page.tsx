import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Components - PURE-Studio",
  description: "Explore the reusable UI components of PURE-Studio",
}

export default function Components() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Components</h1>
        <p className="text-lg text-muted-foreground">
          This section showcases the various reusable UI components used in PURE-Studio.
        </p>
      </div>
      <div className="rounded-lg border bg-card p-6 text-muted-foreground">
        <p>Component library documentation is currently under development.</p>
        <p className="mt-2 text-xl font-semibold text-primary">Coming Soon!</p>
      </div>
    </div>
  )
}
