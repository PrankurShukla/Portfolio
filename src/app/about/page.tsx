"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, GraduationCap, Briefcase, Code, Award } from "lucide-react"
import { Card } from "@/components/ui/card"

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

export default function About() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-gradient-to-b from-background via-background/90 to-background/80">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container py-16 md:py-24 space-y-16"
      >
        {/* Introduction Section */}
        <motion.div variants={item} className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
            About Me
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            I'm a passionate Full Stack Developer and Machine Learning enthusiast, driven by the art of crafting digital experiences that make a difference. 
            With expertise in both frontend and backend technologies, I bridge the gap between user needs and technical solutions.
          </p>
        </motion.div>

        {/* Experience Section */}
        <motion.div variants={item}>
          <h2 className="text-3xl font-bold text-center mb-8">Professional Experience</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold">Assistant Software Engineer</h3>
                    <p className="text-muted-foreground">Resolink Technologies · Internship</p>
                    <p className="text-sm text-muted-foreground">Mar 2025 - Present · Remote</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Leading the development of a comprehensive HRMS system with 200+ API endpoints</li>
                  <li>Implementing secure authentication and role-based access control using JWT</li>
                  <li>Developing RESTful APIs using Django REST Framework</li>
                  <li>Integrating multiple HR modules including employee management, recruitment, attendance, and payroll</li>
                  <li>Creating API documentation using Swagger/OpenAPI</li>
                  <li>Collaborating with frontend team for React integration</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Django", "Django REST Framework", "PostgreSQL", "JWT", "React", "API Development"].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-primary/10 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold">Full Stack Developer</h3>
                    <p className="text-muted-foreground">Diginique TechLabs · Internship</p>
                    <p className="text-sm text-muted-foreground">Jun 2024 - Aug 2024 · Hybrid</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Designed and developed the complete frontend of a web application for food ordering</li>
                  <li>Built a dynamic homepage displaying restaurant listings and menu items</li>
                  <li>Created an interactive shopping cart feature with Context API for state management</li>
                  <li>Implemented user authentication and data consistency across the application</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["React.js", "Node.js", "Express.js", "MongoDB", "Redux.js", "Tailwind CSS"].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-primary/10 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold">Machine Learning Engineer</h3>
                    <p className="text-muted-foreground">Edunet Foundation · Internship</p>
                    <p className="text-sm text-muted-foreground">Dec 2023 - Jan 2024 · Remote</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Developed computer vision-based program for age and gender prediction using OpenCV</li>
                  <li>Implemented image preprocessing techniques for enhanced model performance</li>
                  <li>Utilized pre-trained deep learning models (TensorFlow) for classification</li>
                  <li>Optimized model accuracy through various techniques and face detection algorithms</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Python", "OpenCV", "TensorFlow", "Computer Vision", "Deep Learning"].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-primary/10 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </motion.div>

        {/* Education & Certifications */}
        <motion.div variants={item}>
          <h2 className="text-3xl font-bold text-center mb-8">Education & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Education</h3>
                <div>
                  <h4 className="font-semibold">Bachelor of Technology in Electronics and Communication</h4>
                  <p className="text-muted-foreground">IIITDM Kancheepuram</p>
                  <p className="text-muted-foreground">Dec 2021 - May 2025</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Pursuing B.Tech in Electronics and Communication with a focus on software development
                    and machine learning applications.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Key Certifications</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Machine Learning Specialization</h4>
                    <p className="text-muted-foreground">DeepLearning.AI, Stanford University</p>
                    <p className="text-sm text-muted-foreground">Feb 2024</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Full Stack Web Development</h4>
                    <p className="text-muted-foreground">Meta</p>
                    <p className="text-sm text-muted-foreground">Jan 2024</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Programming with JavaScript</h4>
                    <p className="text-muted-foreground">Meta</p>
                    <p className="text-sm text-muted-foreground">Nov 2023</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Data Analysis with Python</h4>
                    <p className="text-muted-foreground">IBM</p>
                    <p className="text-sm text-muted-foreground">May 2023</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Deep Learning Fundamentals</h4>
                    <p className="text-muted-foreground">IBM</p>
                    <p className="text-sm text-muted-foreground">Aug 2023</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div variants={item}>
          <h2 className="text-3xl font-bold text-center mb-8">Technical Skills</h2>
          <Card className="p-6 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React.js",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "Redux",
                    "HTML5",
                    "CSS3",
                    "Material UI",
                    "Framer Motion"
                  ].map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-primary/10 rounded-full text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Backend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Node.js",
                    "Django",
                    "Express.js",
                    "PostgreSQL",
                    "MongoDB",
                    "REST APIs",
                    "GraphQL",
                    "JWT",
                    "Docker"
                  ].map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-primary/10 rounded-full text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Machine Learning & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "TensorFlow",
                    "OpenCV",
                    "Scikit-Learn",
                    "NLTK",
                    "Git",
                    "AWS",
                    "NumPy",
                    "Pandas"
                  ].map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-primary/10 rounded-full text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={item} className="text-center">
          <Button asChild size="lg" className="group">
            <Link href="/projects" className="gap-2">
              View My Projects
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
} 