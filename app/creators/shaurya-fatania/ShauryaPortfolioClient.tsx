"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Instagram, Mail, DiscIcon as Discord, LinkIcon, Award, Cpu, Code } from "lucide-react"
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
    <div className="space-y-16">
      <motion.section
        className="text-center space-y-6 py-12 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl shadow-inner"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <motion.div className="flex justify-center" variants={itemVariants}>
          <Avatar className="h-32 w-32 border-4 border-primary shadow-lg">
            <AvatarImage src="/placeholder-user.jpg" alt="Shaurya Fatania" />
            <AvatarFallback>SF</AvatarFallback>
          </Avatar>
        </motion.div>
        <motion.h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl" variants={itemVariants}>
          Shaurya Fatania
        </motion.h1>
        <motion.p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto" variants={itemVariants}>
          Prompt Engineer and Frontend Specialist in CSS, JS, and TS.
        </motion.p>
        <motion.div className="flex justify-center gap-4 mt-8" variants={itemVariants}>
          <Button asChild variant="outline" size="lg">
            <Link href="https://shaurya.netlify.app/" target="_blank" rel="noreferrer">
              <LinkIcon className="mr-2 h-5 w-5" /> Website
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="https://github.com/JaaduuOmm" target="_blank" rel="noreferrer">
              <Github className="mr-2 h-5 w-5" /> GitHub
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="https://instagram.com/iamjaaduu" target="_blank" rel="noreferrer">
              <Instagram className="mr-2 h-5 w-5" /> Instagram
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="https://discordapp.com/users/dev_jaaduu" target="_blank" rel="noreferrer">
              <Discord className="mr-2 h-5 w-5" /> Discord
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="mailto:jaaduu.mail@gmail.com">
              <Mail className="mr-2 h-5 w-5" /> Email
            </Link>
          </Button>
        </motion.div>
      </motion.section>

      {/* About Me Section */}
      <motion.section
        className="space-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 className="text-4xl font-bold text-center" variants={itemVariants}>
          About Me
        </motion.h2>
        <motion.div variants={itemVariants}>
          <Card className="shadow-lg shadow-primary/5">
            <CardContent className="p-6 text-lg text-muted-foreground">
              <p>
                I am a passionate Prompt Engineer and Frontend Specialist with a strong focus on creating intuitive and
                visually appealing user interfaces. My expertise lies in CSS, JavaScript, and TypeScript, where I strive
                to build robust and scalable web applications. I am deeply involved in the development of innovative
                projects like PromptOS and PURE STUDIO, constantly pushing the boundaries of what's possible in AI and
                developer tools.
              </p>
              <p className="mt-4">
                My journey in tech is driven by a desire to simplify complex interactions and enhance user experiences.
                I believe in the power of open-source collaboration and am always eager to learn and contribute to the
                community.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* My Projects Section */}
      <motion.section
        className="space-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 className="text-4xl font-bold text-center" variants={itemVariants}>
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <Button asChild variant="link" className="p-0 h-auto">
                  <Link href="https://github.com/JaaduuOmm/PromptOS" target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub Repository
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
                  PURE STUDIO is a professional universal rich editor, designed to provide a seamless and powerful
                  editing experience for various content types. This very website serves as its official documentation
                  and community hub, showcasing its capabilities and fostering collaboration.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section
        className="space-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 className="text-4xl font-bold text-center" variants={itemVariants}>
          Certifications
        </motion.h2>
        <motion.div variants={itemVariants}>
          <Card className="shadow-lg shadow-primary/5">
            <CardContent className="p-6 text-lg text-muted-foreground flex items-center justify-center gap-3">
              <Award className="h-6 w-6 text-primary" /> Coming Soon!
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>
    </div>
  )
}
