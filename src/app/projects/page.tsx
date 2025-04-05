"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Github, ExternalLink, Sparkles, Code2, Laptop, ShoppingCart, Brain } from "lucide-react"
import Image from "next/image"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
}

const fadeIn = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

const projects = [
  {
    title: "Learning Management System (LMS)",
    description: "A comprehensive Learning Management System with role-based access control, real-time updates, and modern features. Built with Next.js 14, React, TypeScript, and Node.js.",
    period: "Jan 2025 - Apr 2025",
    image: "/project1.png",
    icon: Laptop,
    bgColor: "from-blue-500/20 to-purple-500/20",
    features: [
      "Role-based access for administrators, teachers, and students",
      "Real-time statistics and monitoring dashboard",
      "Secure JWT authentication and authorization",
      "Efficient file upload and management system",
      "Optimized database queries and performance"
    ],
    tags: [
      "Next.js 14", "React", "TypeScript", "Node.js", 
      "Express.js", "PostgreSQL", "Prisma ORM", "JWT"
    ],
    github: "https://github.com/PrankurShukla/LMS_MVC",
    demo: "https://lms-demo.vercel.app"
  },
  {
    title: "MedicineForYou",
    description: "An online medicine ordering platform with comprehensive inventory management system. Features include user authentication, order management, and responsive design.",
    period: "Nov 2023 - Feb 2024",
    image: "/project2.png",
    icon: ShoppingCart,
    bgColor: "from-green-500/20 to-emerald-500/20",
    features: [
      "User-friendly medicine ordering interface",
      "Admin panel for inventory management",
      "RESTful API for orders and authentication",
      "Responsive design for all devices"
    ],
    tags: ["MongoDB", "React.js", "Node.js", "Express.js", "JavaScript"],
    github: "https://github.com/PrankurShukla/MedicineForYou",
    demo: "https://medicine-for-you.vercel.app"
  },
  {
    title: "DM Gallery",
    description: "A personal image gallery platform for storing and organizing memories. Features secure image upload, intuitive organization, and responsive viewing experience.",
    period: "Nov 2023 - Dec 2023",
    image: "/project3.png",
    icon: Code2,
    bgColor: "from-orange-500/20 to-red-500/20",
    features: [
      "Secure image upload and storage",
      "Intuitive gallery organization",
      "User authentication and personal spaces",
      "Responsive image viewing experience"
    ],
    tags: ["MongoDB", "React.js", "Node.js", "Express.js", "DBMS"],
    github: "https://github.com/PrankurShukla/DM-Gallery",
    demo: "https://dm-gallery.vercel.app"
  },
  {
    title: "SMS Spam Filtering",
    description: "Machine learning-based SMS spam detection system using Natural Language Processing, achieving 97% accuracy with BernoulliNB classifier.",
    period: "Oct 2023 - Nov 2023",
    image: "/project4.png",
    icon: Brain,
    bgColor: "from-purple-500/20 to-pink-500/20",
    features: [
      "Advanced text preprocessing and feature extraction",
      "Multiple Naïve Bayes classifier implementations",
      "Comprehensive exploratory data analysis",
      "97% accuracy with BernoulliNB classifier"
    ],
    tags: ["Python", "Pandas", "NumPy", "Scikit-Learn", "NLTK"],
    github: "https://github.com/PrankurShukla/Spam-filtering-",
    demo: "https://spam-filter-demo.herokuapp.com"
  }
]

export default function Projects() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-gradient-to-b from-background via-background/90 to-background/80">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container max-w-7xl mx-auto py-16 md:py-24 space-y-16 px-4"
      >
        {/* Header Section */}
        <motion.div variants={fadeIn} className="max-w-3xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-sm font-medium text-primary">Portfolio Showcase</span>
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/50">
            My Projects
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects, demonstrating expertise in full-stack development,
            machine learning, and system design.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div variants={item} className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 justify-items-center">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
                className="group w-full max-w-2xl"
              >
                <Card className="overflow-hidden h-full flex flex-col border-2 hover:border-primary/50 transition-colors duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="h-full w-full relative"
                    >
                      {/* Placeholder with gradient background and icon */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.bgColor} flex items-center justify-center`}>
                        {project.icon && (
                          <project.icon className="w-16 h-16 text-primary/40" />
                        )}
                      </div>
                      
                      {/* Actual Image */}
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-opacity duration-300"
                        priority={index < 2}
                        onError={(e) => {
                          // If image fails to load, placeholder will remain visible
                          e.currentTarget.style.opacity = "0"
                        }}
                      />
                    </motion.div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col relative z-20">
                    <div className="mb-4">
                      <motion.h3 
                        className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-sm text-muted-foreground mt-1">{project.period}</p>
                    </div>
                    <p className="text-muted-foreground mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                      {project.description}
                    </p>
                    <div className="space-y-6 mt-auto">
                      <motion.div 
                        className="space-y-4"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h4 className="font-medium flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                          Key Features
                        </h4>
                        <ul className="list-none space-y-3 text-sm text-muted-foreground">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <ArrowRight className="h-4 w-4 mt-1 text-primary shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 bg-primary/10 rounded-full text-xs font-medium hover:bg-primary/20 transition-colors duration-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <Button variant="default" size="sm" asChild className="w-full group">
                          <Link href={project.github} target="_blank" rel="noopener noreferrer" className="gap-2">
                            <Github className="h-4 w-4 group-hover:scale-110 transition-transform" />
                            View on GitHub
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          variants={fadeIn} 
          className="text-center pt-12"
        >
          <p className="text-muted-foreground mb-6 text-lg">
            Interested in working together? Let's build something amazing!
          </p>
          <Button asChild size="lg" className="group">
            <Link href="/contact" className="gap-2">
              Get in Touch
              <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
} 