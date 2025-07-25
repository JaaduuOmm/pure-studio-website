"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GitCommit, CopyrightIcon as License, Github, Mail, Rss, Users } from "lucide-react"
import { motion } from "framer-motion"

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

export default function ReleaseInfoClient() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">📅 Release Information</h1>
        <p className="text-lg text-muted-foreground">
          Get the latest release information and stay updated with PURE-Studio's development.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
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
                <GitCommit className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-semibold">Current Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p>
                <strong>Version</strong>: Pre-Alpha
              </p>
              <p>
                <strong>Release Date</strong>: Coming soon
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
                <License className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-semibold">License</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p>
                PURE-Studio is released under the{" "}
                <a
                  href="https://opensource.org/licenses/MIT"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  MIT License
                </a>
                .
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
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Card className="rounded-lg border bg-card p-8 hover-3d shadow-lg shadow-primary/5">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Stay Updated</h2>
            <p className="text-muted-foreground">
              PURE-Studio is still in its <strong>pre-alpha</strong> version, and there's more{" "}
              <strong>coming soon</strong>. We're just getting started, and{" "}
              <strong>we want you to be a part of it</strong>.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Github className="h-4 w-4 shrink-0" />
                Follow our{" "}
                <a
                  href="https://github.com/NGL-Jaduu/PURE-studio"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub repository
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Users className="h-4 w-4 shrink-0" />
                Join our community forums
              </li>
              <li className="flex items-center gap-2">
                <Rss className="h-4 w-4 shrink-0" />
                Subscribe to our newsletter
              </li>
            </ul>
          </div>
        </Card>
      </motion.div>

      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Card className="rounded-lg border bg-card p-8 hover-3d shadow-lg shadow-primary/5">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Contact Information</h2>
            <p className="text-muted-foreground">
              Have any questions or want to chat? <strong>We'd love to hear from you</strong>.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Github className="h-4 w-4 shrink-0" />
                GitHub:{" "}
                <a
                  href="https://github.com/NGL-Jaduu/PURE-studio"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  PURE-Studio
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                Email: t0xic.4pric0t@gmail.com
              </li>
            </ul>
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
          <blockquote className="space-y-2">
            <p className="text-xl font-medium italic text-muted-foreground">
              "Great ideas come from the <strong>purest</strong> minds. Welcome to PURE-Studio."
            </p>
            <footer className="text-sm text-muted-foreground">– NGL-Jaduu</footer>
          </blockquote>
        </div>
      </motion.div>
    </div>
  )
}
