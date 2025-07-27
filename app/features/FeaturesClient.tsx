"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Palette,
  Zap,
  Code,
  Globe,
  Sparkles,
  LayoutDashboard,
  GitPullRequest,
  Terminal,
  Search,
  Cloud,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const featureVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

export default function FeaturesClient() {
  const features = [
    {
      title: "Stunning & Intuitive Design",
      description:
        "We poured our hearts into crafting an editor that's not just functional, but truly beautiful. Every pixel, every curve, designed to inspire your best work with a clean, easy-to-navigate interface.",
      icon: Palette,
    },
    {
      title: "Rich & Powerful Functionality",
      description:
        "Beyond the surface, you'll find a suite of powerful tools, meticulously engineered to make your coding and editing flow effortlessly. We thought of everything, so you don't have to.",
      icon: Code,
    },
    {
      title: "Lightning Fast Performance",
      description:
        "Experience the thrill of an editor that keeps pace with your thoughts. We've optimized every line to ensure PURE-Studio feels incredibly responsive, letting you focus purely on creation.",
      icon: Zap,
    },
    {
      title: "Deep Customization Options",
      description:
        "Your workflow is unique, and your tools should be too. We've built PURE-Studio with deep customization in mind, empowering you to shape it perfectly to your needs, from themes to keybindings.",
      icon: Sparkles,
    },
    {
      title: "Seamless Cross-Platform Support",
      description:
        "Work from anywhere, on any device. We believe your creativity shouldn't be confined, so PURE-Studio is engineered to deliver a consistent, powerful experience across all your platforms.",
      icon: Globe,
    },
    {
      title: "Integrated Workspace Management",
      description:
        "Organize your projects with ease. Our integrated workspace features allow you to manage multiple files, folders, and settings within a single, cohesive environment.",
      icon: LayoutDashboard,
    },
    {
      title: "Version Control Integration",
      description:
        "Keep track of your changes effortlessly. PURE-Studio offers built-in support for popular version control systems like Git, making collaboration and history tracking a breeze.",
      icon: GitPullRequest,
    },
    {
      title: "Built-in Terminal Access",
      description:
        "Execute commands directly within your editor. Our integrated terminal provides quick access to your system's command line, enhancing your development workflow without switching applications.",
      icon: Terminal,
    },
    {
      title: "Advanced Search & Replace",
      description:
        "Find and modify text across your entire project with powerful search and replace functionalities, including regex support and case sensitivity options.",
      icon: Search,
    },
    {
      title: "Cloud Sync & Collaboration",
      description:
        "Work together in real-time or sync your projects across devices. PURE-Studio is designed with future-proof cloud capabilities to ensure your work is always accessible and up-to-date.",
      icon: Cloud,
    },
  ]

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">⚡ Features You'll Love</h1>
        <p className="text-lg text-muted-foreground">
          We've poured our passion into PURE-Studio, packing it with features designed to truly enhance your
          productivity and spark your creativity.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            variants={featureVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="rounded-lg border bg-muted p-2">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="rounded-lg border bg-card p-8 hover-3d shadow-lg shadow-primary/5">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Ready to experience PURE-Studio?</h2>
          <p className="text-muted-foreground">
            Dive into the future of text editing. Get started today and unlock your full potential.
          </p>
          <Button asChild size="lg" className="hover-3d shadow-primary/25">
            <Link href="/getting-started">
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <p className="text-xl italic text-center text-muted-foreground mt-8">
        We built <strong>PURE-Studio</strong> to empower you. The sky's truly the limit. 🌌
      </p>
    </div>
  )
}
