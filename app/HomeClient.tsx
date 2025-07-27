"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  Code,
  Cpu,
  Lightbulb,
  Rocket,
  Users,
  Github,
  NotebookText,
  Download,
  Mail,
  Bot,
  LinkIcon,
} from "lucide-react"
import Link from "next/link" // This is the Next.js Link component
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

export default function HomeClient() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <motion.section
        className="text-center space-y-6 py-20 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl shadow-inner"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <motion.h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl" variants={itemVariants}>
          Welcome
        </motion.h1>
        <motion.p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto" variants={itemVariants}>
          Explore our innovative projects: <span className="font-semibold text-primary">PromptOS</span>, a minimalistic
          AI-powered OS for developers; <span className="font-semibold text-primary">PURE STUDIO</span>, your
          professional universal rich editor; and <span className="font-semibold text-primary">Collabify</span>, a
          collaborative note-taking app. While each is a distinct project, they share our commitment to excellence.
        </motion.p>
        <motion.div className="flex justify-center gap-4 mt-8" variants={itemVariants}>
          <Button asChild size="lg">
            <Link href="/getting-started">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/features">Learn More</Link>
          </Button>
        </motion.div>
      </motion.section>

      {/* Features Overview */}
      <motion.section
        className="space-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 className="text-4xl font-bold text-center" variants={itemVariants}>
          Key Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div variants={itemVariants}>
            <Card className="hover-3d shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Lightbulb className="h-6 w-6 text-primary" /> Intuitive Interface
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Crafted for clarity and ease of use, our interface lets you focus on your content, not the tools.
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="hover-3d shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Code className="h-6 w-6 text-primary" /> Powerful Editing
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                From rich text to code, our editor handles diverse formats with advanced features and customization.
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="hover-3d shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Rocket className="h-6 w-6 text-primary" /> Performance Optimized
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Experience lightning-fast performance, ensuring a smooth workflow even with large projects.
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <motion.div className="text-center" variants={itemVariants}>
          <Button asChild variant="outline">
            <Link href="/features">Explore All Features</Link>
          </Button>
        </motion.div>
      </motion.section>

      {/* Call to Action for Contribution */}
      <motion.section
        className="text-center space-y-6 py-16 bg-secondary/10 rounded-xl shadow-inner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 className="text-4xl font-bold" variants={itemVariants}>
          Join Our Community
        </motion.h2>
        <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={itemVariants}>
          PURE STUDIO is an open-source project. Your contributions help us grow and improve. Whether it's code,
          documentation, or ideas, we welcome your involvement!
        </motion.p>
        <motion.div className="flex justify-center gap-4 mt-8" variants={itemVariants}>
          <Button asChild size="lg">
            <Link href="/contribute">
              Contribute <Users className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/creators">Meet the Creators</Link>
          </Button>
        </motion.div>
      </motion.section>

      {/* Project Spotlight Section */}
      <motion.section
        className="space-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 className="text-4xl font-bold text-center" variants={itemVariants}>
          Our Flagship Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div variants={itemVariants}>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Cpu className="h-6 w-6 text-primary" /> PromptOS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  PromptOS is a minimalistic and lightweight operating system designed for your PC. It features an
                  inbuilt AI that runs locally, making it great for coding and efficient even on older hardware.
                  Currently in active development, it's built for developers who value speed and simplicity.
                </p>
                <p className="text-sm font-medium">Technologies: Python, C++, ASM</p>
                <div className="flex flex-wrap gap-2">
                  <Button asChild variant="link" className="p-0 h-auto">
                    <Link href="https://github.com/JaaduuOmm/PromptOS" target="_blank" rel="noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub Repo (Coming Soon)
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" disabled>
                    Commands (Coming Soon)
                  </Button>
                  <Button variant="outline" size="sm" disabled>
                    <Download className="mr-2 h-4 w-4" /> Download (Coming Soon)
                  </Button>
                </div>
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
                  PURE STUDIO is a professional universal rich editor, designed to provide a seamless and powerful
                  editing experience for various content types. This very website serves as its official documentation
                  and community hub, showcasing its capabilities and fostering collaboration.
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
                  Collabify is a collaborative note-taking application designed to be a superior alternative to Notion,
                  offering enhanced features for seamless teamwork and organization. It focuses on intuitive design and
                  powerful collaboration tools to streamline your workflow.
                </p>
                <p className="text-sm font-medium">Technologies: Next.js (not confirmed)</p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Open Website (Coming Soon)
                  </Button>
                  <Button variant="outline" size="sm" disabled>
                    <Download className="mr-2 h-4 w-4" /> Download (Coming Soon)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* ARO AI Section */}
      <motion.section
        className="space-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 className="text-4xl font-bold text-center" variants={itemVariants}>
          Introducing ARO AI
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Bot className="h-6 w-6 text-primary" /> ARO AI
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
                    API (In Progress - August 2025)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-27%20at%2010.59.48%20AM-G45nsxc6p4roSnXXExP9JNwHscBYK4.jpeg"
              alt="ARO AI Model Details"
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-27%20at%2010.59.57%20AM-xAvKkdPtCZyAWzbfgU0s19v5wDuPIj.jpeg"
              alt="ARO AI Key Differences"
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Wanna Join Us? Section */}
      <motion.section
        className="text-center space-y-6 py-16 bg-primary/10 rounded-xl shadow-inner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 className="text-4xl font-bold" variants={itemVariants}>
          Wanna Join Us?
        </motion.h2>
        <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={itemVariants}>
          We're always looking for passionate individuals to join our journey. Show us what you've got!
        </motion.p>
        <motion.div className="flex justify-center gap-4 mt-8" variants={itemVariants}>
          <Button asChild size="lg">
            <Link href="mailto:jaaduu.mail@gmail.com">
              Send a Mail <Mail className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </motion.section>
    </div>
  )
}
