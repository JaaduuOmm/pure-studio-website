import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "API Reference - PURE-Studio",
  description: "Comprehensive API documentation for PURE-Studio",
}

export default function APIReference() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">API Reference</h1>
        <p className="text-lg text-muted-foreground">
          This section provides detailed documentation for PURE-Studio's API.
        </p>
      </div>
      <div className="rounded-lg border bg-card p-6 text-muted-foreground">
        <p>API documentation is currently under development.</p>
        <p className="mt-2 text-xl font-semibold text-primary">Coming Soon!</p>
      </div>
    </div>
  )
}
