"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Instagram, Mail, DiscIcon as Discord, Award, NotebookText, Code } from "lucide-react"
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

export default function VedantPortfolioClient() {
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
            <AvatarImage src="/placeholder-user.jpg" alt="Vedant Roy" />
            <AvatarFallback>VR</AvatarFallback>
          </Avatar>
        </motion.div>
        <motion.h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl" variants={itemVariants}>
          Vedant Roy
        </motion.h1>
        <motion.p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto" variants={itemVariants}>
          Social Expert, Data Analysis, Information Collection, and Trend Search.
        </motion.p>
        <motion.div className="flex justify-center gap-4 mt-8" variants={itemVariants}>
          <Button asChild variant="outline" size="lg">
            <Link href="https://github.com/your-vedant-github" target="_blank" rel="noreferrer">
              <Github className="mr-2 h-5 w-5" /> GitHub
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="https://instagram.com/vsat_studios" target="_blank" rel="noreferrer">
              <Instagram className="mr-2 h-5 w-5" /> Instagram
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="https://discordapp.com/users/vsat12_80623" target="_blank" rel="noreferrer">
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
                I specialize in social media strategy, data analysis, and information collection, with a keen eye for
                identifying emerging trends. My role involves ensuring our projects are well-informed by market insights
                and user feedback, contributing to their strategic direction and public presence.
              </p>
              <p className="mt-4">
                I am passionate about understanding user behavior and leveraging data to drive impactful decisions. My
                work supports the development and outreach of projects like PromptOS, PURE STUDIO, and Collabify,
                helping them connect with their audience effectively.
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
                  <NotebookText className="h-6 w-6 text-primary" /> Collabify
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Collabify is a collaborative note-taking application designed to be a superior alternative to Notion,
                  offering enhanced features for seamless teamwork and organization. It focuses on intuitive design and
                  powerful collaboration tools to streamline your workflow.
                </p>
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
