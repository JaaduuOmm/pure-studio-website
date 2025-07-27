"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Globe, Instagram, Mail, Award, Cpu, Code, NotebookText, DiscIcon as Discord } from "lucide-react"
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

export default function ShauryaPortfolioClient() {
  return (
    <div className="space-y-10">
      <motion.section
        className="text-center space-y-6 py-12 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-xl shadow-inner"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <motion.h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl" variants={itemVariants}>
          Shaurya Fatania
        </motion.h1>
        <motion.p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto" variants={itemVariants}>
          Prompt Engineer & Frontend Specialist (CSS, JS, TS)
        </motion.p>
      </motion.section>

      <motion.section
        className="space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 className="text-4xl font-bold text-center" variants={itemVariants}>
          About Me
        </motion.h2>
        <motion.div variants={itemVariants}>
          <Card className="hover-3d shadow-lg shadow-primary/5">
            <CardContent className="p-6 text-muted-foreground">
              <p>
                Hello! I'm Shaurya Fatania, a passionate Prompt Engineer and Frontend Specialist. My expertise lies in
                crafting intuitive and visually appealing user interfaces using modern web technologies like CSS,
                JavaScript, and TypeScript. I'm deeply involved in the development of innovative projects like PromptOS
                and PURE STUDIO, always striving to push the boundaries of what's possible.
              </p>
              <p className="mt-4">
                I believe in creating tools that are not only powerful but also a joy to use. My journey is driven by a
                desire to build impactful solutions and contribute to the open-source community.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      <motion.section
        className="space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 className="text-4xl font-bold text-center" variants={itemVariants}>
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants}>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Cpu className="h-6 w-6 text-primary" /> PromptOS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  A minimalistic and lightweight operating system designed for your PC, featuring an inbuilt AI that
                  runs locally. Great for coding and efficient even on older hardware.
                </p>
                <p className="text-sm font-medium">Technologies: Python, C++, ASM</p>
                <Button asChild variant="link" className="p-0 h-auto">
                  <Link href="https://github.com/JaaduuOmm/PromptOS" target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub Repo
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Code className="h-6 w-6 text-primary" /> PURE STUDIO
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  A professional universal rich editor, designed to provide a seamless and powerful editing experience
                  for various content types. This very website serves as its official documentation and community hub.
                </p>
                <p className="text-sm font-medium">Technologies: Electron</p>
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
                  A collaborative note-taking application designed to be a superior alternative to Notion, offering
                  enhanced features for seamless teamwork and organization.
                </p>
                <p className="text-sm font-medium">Technologies: Next.js (not confirmed)</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 className="text-4xl font-bold text-center" variants={itemVariants}>
          Certifications
        </motion.h2>
        <motion.div variants={itemVariants}>
          <Card className="hover-3d shadow-lg shadow-primary/5">
            <CardContent className="p-6 text-muted-foreground flex items-center justify-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              <p>Certifications (Coming Soon)</p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      <motion.section
        className="space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 className="text-4xl font-bold text-center" variants={itemVariants}>
          Connect With Me
        </motion.h2>
        <motion.div variants={itemVariants}>
          <Card className="hover-3d shadow-lg shadow-primary/5">
            <CardContent className="p-6 flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline">
                <Link href="https://shaurya.netlify.app" target="_blank" rel="noreferrer">
                  <Globe className="mr-2 h-4 w-4" />
                  Website
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://github.com/JaaduuOmm" target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://instagram.com/iamjaaduu" target="_blank" rel="noreferrer">
                  <Instagram className="mr-2 h-4 w-4" />
                  Instagram
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://discordapp.com/users/dev_jaaduu" target="_blank" rel="noreferrer">
                  <Discord className="mr-2 h-4 w-4" />
                  Discord
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="mailto:jaaduu.mail@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>
    </div>
  )
}
