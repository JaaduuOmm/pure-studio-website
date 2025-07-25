"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

export default function CreatorsClient() {
  const creators = [
    {
      name: "Shaurya Fatania",
      description: "Full-stack developer and UI/UX enthusiast.",
      link: "/creators/shaurya-fatania",
    },
    {
      name: "Vedant Roy",
      description: "Backend specialist and performance optimization expert.",
      link: "/creators/vedant-roy",
    },
  ]

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">✨ Creator's Portfolio</h1>
        <p className="text-lg text-muted-foreground">Meet the brilliant minds behind PURE-Studio.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {creators.map((creator, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="rounded-lg border bg-muted p-2">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-semibold">{creator.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <p className="text-muted-foreground">{creator.description}</p>
                <Button asChild variant="outline" className="w-fit bg-transparent">
                  <Link href={creator.link}>
                    View Portfolio
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="rounded-lg border bg-card p-8 hover-3d shadow-lg shadow-primary/5">
          <blockquote className="space-y-2">
            <p className="text-xl font-medium italic text-muted-foreground">
              "Innovation is the key to progress, and these creators embody that spirit."
            </p>
            <footer className="text-sm text-muted-foreground">– The PURE-Studio Team</footer>
          </blockquote>
        </div>
      </motion.div>
    </div>
  )
}
