"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, GitBranch, Lightbulb, Users, Mail } from "lucide-react"
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

export default function ContributeClient() {
  return (
    <div className="space-y-10">
      <motion.section
        className="text-center space-y-6 py-12 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl shadow-inner"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <motion.h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl" variants={itemVariants}>
          Contribute to PURE-Studio
        </motion.h1>
        <motion.p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto" variants={itemVariants}>
          PURE-Studio is an open-source project, and we welcome contributions from everyone! Your ideas, code, and
          feedback are invaluable to us.
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
          How You Can Help
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <motion.div variants={itemVariants}>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Code className="h-6 w-6 text-primary" /> Code Contributions
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Found a bug? Have a feature in mind? Fork our repository, make your changes, and submit a pull request.
                We appreciate clean, well-documented code.
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Lightbulb className="h-6 w-6 text-primary" /> Ideas & Feedback
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Your insights are crucial! Share your thoughts on existing features, suggest new ones, or report any
                issues you encounter. Open an issue on GitHub or reach out to us.
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Users className="h-6 w-6 text-primary" /> Community Support
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Help other users, answer questions, and share your knowledge. A strong community makes PURE-Studio
                better for everyone.
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
          Ready to Make a Difference?
        </motion.h2>
        <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={itemVariants}>
          Check out our GitHub repository for open issues, contribution guidelines, and more.
        </motion.p>
        <motion.div className="flex justify-center gap-4 mt-8" variants={itemVariants}>
          <Button asChild size="lg">
            <Link href="https://github.com/NGL-Jaduu/PURE-studio" target="_blank" rel="noreferrer">
              Visit GitHub Repo <GitBranch className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="mailto:jaaduu.mail@gmail.com">
              Contact Us <Mail className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </motion.section>
    </div>
  )
}
