"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Send, Github, Linkedin, Mail, MessageSquare, Sparkles, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import emailjs from '@emailjs/browser'
import { toast } from "sonner"

// Initialize EmailJS
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "")

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

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/PrankurShukla",
    color: "hover:text-[#333]"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/prankur-shukla-07bb18241/",
    color: "hover:text-[#0077b5]"
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:shuklaprankur27@gmail.com",
    color: "hover:text-[#EA4335]"
  }
]

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)
    const senderName = formData.get('name')
    const senderEmail = formData.get('email')
    const message = formData.get('message')

    const data = {
      to_name: 'Prankur',
      from_name: senderName,
      from_email: senderEmail,
      reply_to: senderEmail,
      subject: `New Portfolio Contact Form Message from ${senderName}`,
      message: `
Dear Prankur,

You have received a new message from your portfolio contact form.

Sender Details:
-------------
Name: ${senderName}
Email: ${senderEmail}

Message Content:
-------------
${message}

-------------
This is an automated email sent from your portfolio website's contact form.
You can reply directly to this email to respond to ${senderName}.
      `.trim(),
      // Keep the original message in a separate field just in case
      original_message: message
    }

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

      if (!serviceId || !templateId) {
        throw new Error("EmailJS configuration is missing")
      }

      console.log('Sending email with data:', data) // Add logging for debugging
      
      await emailjs.send(
        serviceId,
        templateId,
        data
      )
      toast.success("Message sent successfully! I'll get back to you soon.")
      form.reset()
    } catch (error) {
      console.error('EmailJS Error:', error)
      toast.error("Failed to send message. Please try again or use direct email.")
    } finally {
      setIsLoading(false)
    }
  }

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
            <span className="text-sm font-medium text-primary">Let's Connect</span>
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/50">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you.
            Feel free to reach out through any of the channels below.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div variants={item}>
            <Card className="p-6 md:p-8 border-2 hover:border-primary/50 transition-colors duration-300">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">Send a Message</h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div 
                  variants={item}
                  className="space-y-2"
                >
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    disabled={isLoading}
                    className="bg-background/50 focus-visible:ring-primary"
                  />
                </motion.div>
                <motion.div 
                  variants={item}
                  className="space-y-2"
                >
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    required
                    disabled={isLoading}
                    className="bg-background/50 focus-visible:ring-primary"
                  />
                </motion.div>
                <motion.div 
                  variants={item}
                  className="space-y-2"
                >
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    required
                    disabled={isLoading}
                    className="min-h-[150px] bg-background/50 focus-visible:ring-primary resize-none"
                  />
                </motion.div>
                <motion.div variants={item}>
                  <Button 
                    type="submit" 
                    className="w-full group" 
                    disabled={isLoading}
                    size="lg"
                  >
                    {isLoading ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={item} className="space-y-6">
            <Card className="p-6 md:p-8 border-2 hover:border-primary/50 transition-colors duration-300 h-full">
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Connect With Me</h2>
                  <p className="text-muted-foreground">
                    Choose your preferred way to get in touch. I'm always open to discussing new projects,
                    creative ideas, or opportunities to be part of your visions.
                  </p>
                </div>

                <div className="space-y-6">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 text-muted-foreground ${link.color} transition-colors duration-300 group`}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <link.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">{link.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {link.href.replace('mailto:', '')}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </motion.a>
                  ))}
                </div>

                <div className="pt-6 border-t">
                  <h3 className="font-medium mb-2">Quick Response</h3>
                  <p className="text-sm text-muted-foreground">
                    I typically respond within 24 hours. For urgent matters, 
                    direct email is the fastest way to reach me.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
} 