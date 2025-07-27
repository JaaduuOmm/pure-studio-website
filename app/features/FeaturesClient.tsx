"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { Lightbulb, Code, Rocket, ArrowRight } from "lucide-react"

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

export default function FeaturesClient() {
  return (
    <div className="space-y-16">
      <motion.section
        className="text-center space-y-6 py-12 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl shadow-inner"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <motion.h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl" variants={itemVariants}>
          Our Core Strengths
        </motion.h1>
        <motion.p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto" variants={itemVariants}>
          We've poured our passion into crafting features that truly make a difference in your workflow and creative
          process.
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
          Key Capabilities
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div variants={itemVariants}>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Lightbulb className="h-6 w-6 text-primary" /> Intuitive Interface
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                We designed every element for clarity and ease of use, so you can focus on your content, not on figuring
                out the tools. It's about making your experience seamless and enjoyable.
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Code className="h-6 w-6 text-primary" /> Powerful Editing
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                From rich text to complex code, our editor handles diverse formats with advanced features. We built it
                to be robust and customizable, adapting to your unique needs.
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Rocket className="h-6 w-6 text-primary" /> Performance Optimized
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                We obsessed over every millisecond to ensure lightning-fast performance. You'll experience a smooth,
                responsive workflow, even when tackling your largest and most complex projects. No more waiting.
              </CardContent>
            </Card>
          </motion.div>
          {/* Additional features can be added here */}
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
          Ready to Experience the Difference?
        </motion.h2>
        <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={itemVariants}>
          We're constantly evolving and adding new capabilities. Dive in and see how our features can transform your
          work.
        </motion.p>
        <motion.div className="flex justify-center gap-4 mt-8" variants={itemVariants}>
          <Button asChild size="lg">
            <Link href="/getting-started">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contribute">Contribute</Link>
          </Button>
        </motion.div>
      </motion.section>
    </div>
  )
}
