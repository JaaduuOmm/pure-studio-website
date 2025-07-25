"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GitFork, Bug, Users, Github, DiscIcon as Discord } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

export default function ContributeClient() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">🤝 Contribute to PURE-Studio</h1>
        <p className="text-lg text-muted-foreground">
          Want to make <strong>PURE-Studio</strong> even better? Here's how you can get involved:
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="hover-3d h-full shadow-lg shadow-primary/5">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="rounded-lg border bg-muted p-2">
                <GitFork className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-semibold">Fork & Pull</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                <strong>Fork</strong> the repo and send us your pull requests with new features or bug fixes.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="hover-3d h-full shadow-lg shadow-primary/5">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="rounded-lg border bg-muted p-2">
                <Bug className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-semibold">Report Issues</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                <strong>Report bugs</strong> you find and suggest new features to improve the editor.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="hover-3d h-full shadow-lg shadow-primary/5">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="rounded-lg border bg-muted p-2">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-semibold">Join Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                <strong>Join our community</strong> and actively shape the future of this powerful tool.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Card className="rounded-lg border bg-card p-8 hover-3d shadow-lg shadow-primary/5">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">How to Contribute</h2>
            <ol className="list-decimal list-inside space-y-4 text-muted-foreground">
              <li>Fork the PURE-Studio repository on GitHub.</li>
              <li>Clone your fork locally.</li>
              <li>Create a new branch for your feature or bug fix.</li>
              <li>Make your changes and commit them with a clear commit message.</li>
              <li>Push your changes to your fork on GitHub.</li>
              <li>Open a pull request from your fork to the main PURE-Studio repository.</li>
            </ol>
            <p className="mt-6 text-muted-foreground">
              For more detailed information on contributing, please check our
              <a
                href="https://github.com/NGL-Jaduu/PURE-studio/blob/main/CONTRIBUTING.md"
                className="text-blue-500 hover:underline ml-1"
                target="_blank"
                rel="noreferrer"
              >
                contribution guidelines
              </a>
              .
            </p>
          </div>
        </Card>
      </motion.div>

      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="rounded-lg border bg-card p-8 hover-3d shadow-lg shadow-primary/5">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Join Our Community</h2>
            <p className="text-muted-foreground">
              Be part of our growing community. Join our Discord server to contribute, get help, and connect with other
              PURE-Studio enthusiasts.
            </p>
            <div className="flex flex-col gap-4 md:flex-row">
              <Button asChild size="lg" className="bg-[#5865F2] hover:bg-[#4752C4] hover-3d shadow-[#5865F2]/25">
                <Link href="https://discord.gg/3XbwPs9WZF" target="_blank">
                  <Discord className="mr-2 h-5 w-5" />
                  Join Discord Server
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover-3d shadow-primary/25 bg-transparent">
                <Link href="https://github.com/NGL-Jaduu/PURE-studio" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      <p className="text-xl italic text-center text-muted-foreground mt-8">
        Together, we'll <strong>build the next big thing</strong>. 🌍
      </p>
    </div>
  )
}
