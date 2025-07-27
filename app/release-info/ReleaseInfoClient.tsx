"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Cpu, NotebookText, GitBranch, CalendarDays } from "lucide-react"
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

export default function ReleaseInfoClient() {
  return (
    <div className="space-y-10">
      <motion.section
        className="text-center space-y-6 py-12 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl shadow-inner"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <motion.h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl" variants={itemVariants}>
          Release Information
        </motion.h1>
        <motion.p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto" variants={itemVariants}>
          Stay up-to-date with the latest developments and upcoming releases for our projects.
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
          Project Development Status
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div variants={itemVariants}>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Code className="h-6 w-6 text-primary" /> PURE STUDIO
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Our professional universal rich editor is continuously evolving with new features and performance
                  enhancements.
                </p>
                <p className="text-sm font-medium flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" /> Last Update: July 2025
                </p>
                <Button variant="outline" size="sm" disabled>
                  Project View (Coming Soon)
                </Button>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Cpu className="h-6 w-6 text-primary" /> PromptOS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  The minimalistic AI-powered OS is under active development, focusing on stability and expanding its
                  core functionalities.
                </p>
                <p className="text-sm font-medium flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" /> Last Update: July 2025
                </p>
                <Button variant="outline" size="sm" disabled>
                  Project View (Coming Soon)
                </Button>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <NotebookText className="h-6 w-6 text-primary" /> Collabify
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Our collaborative note-taking app is in its early stages, with a strong focus on core features and
                  user experience.
                </p>
                <p className="text-sm font-medium flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" /> Last Update: July 2025
                </p>
                <Button variant="outline" size="sm" disabled>
                  Project View (Coming Soon)
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="text-center space-y-6 py-16 bg-secondary/10 rounded-xl shadow-inner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 className="text-4xl font-bold" variants={itemVariants}>
          Want to Contribute?
        </motion.h2>
        <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={itemVariants}>
          Your ideas and code can help shape the future of our projects. Join our open-source community!
        </motion.p>
        <motion.div className="flex justify-center gap-4 mt-8" variants={itemVariants}>
          <Button asChild size="lg">
            <Link href="/contribute">
              Learn How to Contribute <GitBranch className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </motion.section>
    </div>
  )
}
