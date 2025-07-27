"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"
import { Code, Cpu, NotebookText, CalendarDays, Hourglass, Eye } from "lucide-react"

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
    <div className="space-y-16">
      <motion.section
        className="text-center space-y-6 py-12 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl shadow-inner"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <motion.h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl" variants={itemVariants}>
          Release Information
        </motion.h1>
        <motion.p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto" variants={itemVariants}>
          Stay up-to-date with the latest developments and upcoming releases for our projects.
        </motion.p>
      </motion.section>

      {/* Project Development Status Section */}
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
                  PURE STUDIO is continuously evolving with new features and improvements. We are committed to providing
                  a robust and versatile editing experience.
                </p>
                <Separator className="my-2" />
                <div className="flex items-center gap-2 text-sm">
                  <CalendarDays className="h-4 w-4" />
                  <span>Last Update: July 2025</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Hourglass className="h-4 w-4" />
                  <span>Status: Active Development</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Eye className="h-4 w-4" />
                  <span>Project View: Coming Soon</span>
                </div>
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
                  PromptOS is in its early development stages, focusing on core AI integration and system stability.
                  Exciting updates are on the horizon!
                </p>
                <Separator className="my-2" />
                <div className="flex items-center gap-2 text-sm">
                  <CalendarDays className="h-4 w-4" />
                  <span>Last Update: July 2025</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Hourglass className="h-4 w-4" />
                  <span>Status: Alpha Development</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Eye className="h-4 w-4" />
                  <span>Project View: Coming Soon</span>
                </div>
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
                  Collabify is being actively developed to bring a superior collaborative note-taking experience. Stay
                  tuned for beta access!
                </p>
                <Separator className="my-2" />
                <div className="flex items-center gap-2 text-sm">
                  <CalendarDays className="h-4 w-4" />
                  <span>Last Update: July 2025</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Hourglass className="h-4 w-4" />
                  <span>Status: Pre-Alpha Development</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Eye className="h-4 w-4" />
                  <span>Project View: Coming Soon</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
