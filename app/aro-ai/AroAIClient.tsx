"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, LinkIcon } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

export default function AroAIClient() {
  return (
    <div className="space-y-10">
      <motion.section
        className="text-center space-y-6 py-12 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl shadow-inner"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <motion.h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl" variants={itemVariants}>
          Introducing ARO AI
        </motion.h1>
        <motion.p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto" variants={itemVariants}>
          Meet ARO AI, our custom-trained, autonomous AI designed to excel in all tasks, available at no cost.
        </motion.p>
      </motion.section>

      <motion.section
        className="space-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 className="text-4xl font-bold text-center" variants={itemVariants}>
          What is ARO AI?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Bot className="h-6 w-6 text-primary" /> ARO AI Explained
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  <strong>A</strong>utonomous – Works on its own, doesn’t need hand-holding
                </p>
                <p>
                  <strong>R</strong>easoning – It thinks logically, makes sense of chaos
                </p>
                <p>
                  <strong>O</strong>perator – Acts, executes, solves — not just thinks, but does
                </p>
                <p>
                  <strong>AI</strong> – You already know, the brain behind the beast
                </p>
                <p className="text-sm font-medium">Custom trained in Llama3.2 70B.</p>
                <p className="text-sm text-red-500 font-semibold">
                  Disclaimer: ARO AI operates entirely independently, without relying on API keys from Google, Claude,
                  ChatGPT, or any other third-party AI services. It is custom-trained on Cloudflare Workers to excel in
                  all tasks and is available at no cost. The API key for integrating ARO AI into your projects is
                  currently under development, with an estimated release date of September 2025, which may be subject to
                  change.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button asChild variant="link" className="p-0 h-auto">
                    <Link href="https://aro-ai-website.vercel.app/" target="_blank" rel="noreferrer">
                      <LinkIcon className="mr-2 h-4 w-4" />
                      Official Website
                    </Link>
                  </Button>
                  <Button asChild variant="link" className="p-0 h-auto">
                    <Link href="https://project.aroai.workers.dev/" target="_blank" rel="noreferrer">
                      <LinkIcon className="mr-2 h-4 w-4" />
                      Cloudflare Worker Deployment
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" disabled>
                    API (In Progress - September 2025)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          {/* Images removed as requested */}
        </div>
      </motion.section>
    </div>
  )
}
