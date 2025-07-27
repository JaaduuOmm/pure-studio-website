"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Lightbulb,
  Code,
  Rocket,
  Palette,
  ShieldCheck,
  Cloud,
  Users,
  FileText,
  Search,
  Zap,
  Settings,
  Globe,
  MessageSquare,
  Database,
  GitPullRequest,
  Bug,
  BookOpen,
  Megaphone,
  Calendar,
  BarChart,
  Bell,
  Lock,
  Share2,
  Layers,
  Terminal,
  Cpu,
  NotebookText,
  ArrowRight,
} from "lucide-react"

export default function FeaturesClient() {
  return (
    <div className="space-y-16">
      <section className="text-center space-y-6 py-12 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl shadow-inner">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">Our Core Strengths</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
          We've poured our passion into crafting features that truly make a difference in your workflow and creative
          process.
        </p>
      </section>

      <section className="space-y-10">
        <h2 className="text-4xl font-bold text-center">Key Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Palette className="h-6 w-6 text-primary" /> Customizable Themes
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Personalize your workspace with a variety of built-in themes or create your own to match your aesthetic
                and boost your productivity.
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <ShieldCheck className="h-6 w-6 text-primary" /> Robust Security
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Your data's security is our top priority. We've implemented strong security measures to protect your
                work and privacy, giving you peace of mind.
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Cloud className="h-6 w-6 text-primary" /> Cloud Sync
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Access your projects from anywhere, on any device. Our seamless cloud synchronization keeps your work
                up-to-date and always within reach.
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Users className="h-6 w-6 text-primary" /> Collaborative Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Work together effortlessly with real-time collaboration features. We built this for teams to create and
                innovate as one.
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <FileText className="h-6 w-6 text-primary" /> Extensive Documentation
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                We believe in empowering you with knowledge. Our comprehensive documentation guides you through every
                feature and function.
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Search className="h-6 w-6 text-primary" /> Advanced Search
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Find exactly what you need, instantly. Our powerful search capabilities cut through the clutter to get
                you to your information faster.
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Zap className="h-6 w-6 text-primary" /> Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Streamline your workflow with shortcuts and quick commands. We designed these to save you time and keep
                you in your creative flow.
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Settings className="h-6 w-6 text-primary" /> Granular Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Tailor every aspect of the application to your preferences. We give you the control to make it truly
                yours.
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Globe className="h-6 w-6 text-primary" /> Multi-language Support
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Work in your preferred language. We're building a global tool, accessible and comfortable for everyone.
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <MessageSquare className="h-6 w-6 text-primary" /> Integrated Chat
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Communicate with your team directly within the application. We believe in keeping conversations where
                the work happens.
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Database className="h-6 w-6 text-primary" /> Data Management
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Organize, store, and retrieve your data efficiently. We provide robust tools to keep your information
                structured and safe.
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <GitPullRequest className="h-6 w-6 text-primary" /> Version Control
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Track changes, revert to previous versions, and collaborate without fear. We built in powerful version
                control to protect your progress.
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Bug className="h-6 w-6 text-primary" /> Debugging Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                For developers, our integrated debugging tools help you identify and fix issues quickly, making your
                coding experience smoother.
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <BookOpen className="h-6 w-6 text-primary" /> Learning Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Beyond documentation, we offer tutorials and guides to help you master the application and unlock its
                full potential.
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Megaphone className="h-6 w-6 text-primary" /> Announcements & Updates
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Stay informed with the latest news, features, and improvements. We keep you in the loop with our ongoing
                development.
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Calendar className="h-6 w-6 text-primary" /> Scheduling & Reminders
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Organize your tasks and never miss a deadline with integrated scheduling and reminder functionalities.
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <BarChart className="h-6 w-6 text-primary" /> Analytics & Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Gain valuable insights into your usage and productivity with built-in analytics tools.
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Bell className="h-6 w-6 text-primary" /> Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Stay on top of important updates and activities with customizable notification settings.
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Lock className="h-6 w-6 text-primary" /> Access Control
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Manage permissions and control who can access your projects and data with fine-grained access control.
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Share2 className="h-6 w-6 text-primary" /> Sharing Options
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Easily share your work with others through various sharing and export options.
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Layers className="h-6 w-6 text-primary" /> Modular Architecture
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Our modular design allows for easy expansion and integration with other tools and services.
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Terminal className="h-6 w-6 text-primary" /> Command Line Interface (CLI)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                For power users, our CLI provides direct control and automation capabilities.
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Cpu className="h-6 w-6 text-primary" /> AI Integration
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Leverage intelligent features powered by our custom-trained AI, enhancing your productivity and
                creativity.
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="hover-3d h-full shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <NotebookText className="h-6 w-6 text-primary" /> Rich Note-Taking
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Capture ideas, organize thoughts, and create detailed notes with rich formatting and multimedia support.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="text-center space-y-6 py-16 bg-secondary/10 rounded-xl shadow-inner">
        <h2 className="text-4xl font-bold">Ready to Experience the Difference?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We're constantly evolving and adding new capabilities. Dive in and see how our features can transform your
          work.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <Button asChild size="lg">
            <Link href="/getting-started">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contribute">Contribute</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
