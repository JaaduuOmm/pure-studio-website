"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Mail } from "lucide-react"
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

export default function CreatorsClient() {
  return (
    <div className="space-y-10">
      <motion.section
        className="text-center space-y-6 py-12 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-xl shadow-inner"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <motion.h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl" variants={itemVariants}>
          Our Creators
        </motion.h1>
        <motion.p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto" variants={itemVariants}>
          Meet the passionate individuals behind PURE-Studio and our other innovative projects.
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
          Meet the Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Users className="h-6 w-6 text-primary" /> Shaurya Fatania
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Prompt Engineer & Frontend Specialist (CSS, JS, TS)</p>
                <Button asChild size="sm">
                  <Link href="/creators/shaurya-fatania">View Portfolio</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Users className="h-6 w-6 text-primary" /> Vedant Roy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Social Expert, Data Analysis, Information Collection, & Trend Search</p>
                <Button asChild size="sm">
                  <Link href="/creators/vedant-roy">View Portfolio</Link>
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
          Interested in Joining Us?
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
