"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Code2, Database, Layout, Github, Linkedin, Mail } from "lucide-react"
import Typewriter from 'typewriter-effect'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const floatingAnimation = {
  y: [-10, 10],
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut"
  }
}

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16 md:py-24 bg-gradient-to-b from-background via-background/90 to-background/80">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
            Hi, I'm Prankur Shukla
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground h-[60px] flex items-center justify-center">
            <Typewriter
              options={{
                strings: [
                  'Full-stack Developer',
                  'Machine Learning Engineer',
                  'UI/UX Enthusiast'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80,
              }}
            />
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Crafting modern web applications with passion and precision.
            Specializing in React, Next.js, and Node.js.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button asChild size="lg" className="group">
              <Link href="/projects" className="gap-2">
                View Projects 
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
          <div className="flex gap-4 justify-center pt-6">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Button variant="ghost" size="icon" asChild className="rounded-full">
                <Link href="https://github.com/PrankurShukla" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Button variant="ghost" size="icon" asChild className="rounded-full">
                <Link href="https://www.linkedin.com/in/prankur-shukla-07bb18241/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Button variant="ghost" size="icon" asChild className="rounded-full">
                <Link href="mailto:shuklaprankur27@gmail.com">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="container"
        >
          <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={item} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="p-6 hover:shadow-lg transition-all duration-300 group cursor-default relative overflow-hidden">
                <motion.div animate={floatingAnimation} className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Layout className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Frontend Development</h3>
                  <p className="text-muted-foreground">
                    Building responsive and accessible web applications with modern frameworks.
                    Expertise in React, Next.js, and TypeScript.
                  </p>
                </motion.div>
              </Card>
            </motion.div>

            <motion.div variants={item} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="p-6 hover:shadow-lg transition-all duration-300 group cursor-default relative overflow-hidden">
                <motion.div animate={floatingAnimation} className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Backend Development</h3>
                  <p className="text-muted-foreground">
                    Creating scalable APIs and server-side applications using Node.js, 
                    Express, and Django. Expert in database design and optimization.
                  </p>
                </motion.div>
              </Card>
            </motion.div>

            <motion.div variants={item} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="p-6 hover:shadow-lg transition-all duration-300 group cursor-default relative overflow-hidden">
                <motion.div animate={floatingAnimation} className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Machine Learning</h3>
                  <p className="text-muted-foreground">
                    Implementing intelligent solutions using Python, TensorFlow, and OpenCV.
                    Specializing in computer vision and NLP.
                  </p>
                </motion.div>
              </Card>
            </motion.div>
          </div>

          <motion.div 
            variants={item}
            className="mt-12 text-center"
          >
            <Button asChild variant="outline" size="lg" className="group">
              <Link href="/about" className="gap-2">
                Learn More About Me 
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
