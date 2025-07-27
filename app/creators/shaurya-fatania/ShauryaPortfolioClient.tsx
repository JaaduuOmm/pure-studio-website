"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LinkIcon, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

export default function ShauryaPortfolioClient() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">👤 Shaurya Fatania</h1>
        <p className="text-lg text-muted-foreground">
          Full-stack developer with a passion for creating intuitive and beautiful user interfaces.
        </p>
      </div>

      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Card className="hover-3d shadow-lg shadow-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">About Me</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Hi, I'm Shaurya! I specialize in building robust and scalable web applications using modern technologies.
              My focus is on delivering exceptional user experiences through clean code and thoughtful design.
            </p>
            <p>
              I have experience with Next.js, React, Node.js, and various database technologies. I love tackling complex
              problems and continuously learning new things.
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
        <Card className="hover-3d shadow-lg shadow-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">My Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">PromptOS</h3>
              <p>
                PromptOS is a minimalistic and lightweight operating system designed for your PC. It features an inbuilt
                AI that runs locally, making it great for coding and efficient even on older hardware. Currently in
                active development.
              </p>
              <Button asChild variant="link" className="p-0 h-auto">
                <Link href="https://github.com/JaaduuOmm/PromptOS" target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Repository
                </Link>
              </Button>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">PURE STUDIO</h3>
              <p>
                PURE STUDIO is a professional universal rich editor, designed to provide a seamless and powerful editing
                experience for various content types. This website serves as its official documentation and community
                hub.
              </p>
            </div>
            {/* Existing projects, if any, can be added here or removed if replaced */}
            {/*
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>E-commerce Platform:</strong> Developed a full-stack e-commerce solution with secure payment
                integration.
              </li>
              <li>
                <strong>Real-time Chat App:</strong> Built a real-time messaging application using WebSockets.
              </li>
            </ul>
            */}
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
        <Card className="hover-3d shadow-lg shadow-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Connect with Shaurya</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <Button asChild variant="outline">
              <Link href="https://github.com/shaurya-fatania-profile" target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="https://linkedin.com/in/shaurya-fatania-profile" target="_blank" rel="noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="mailto:shaurya.fatania@example.com">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="https://shaurya-fatania.com" target="_blank" rel="noreferrer">
                <LinkIcon className="mr-2 h-4 w-4" />
                Website
              </Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
