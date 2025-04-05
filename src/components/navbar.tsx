"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "@/components/mode-toggle"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">PS</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/"
              className={pathname === "/" 
                ? "text-foreground font-medium" 
                : "text-foreground/60 hover:text-foreground/80 transition-colors"}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={pathname === "/projects" 
                ? "text-foreground font-medium" 
                : "text-foreground/60 hover:text-foreground/80 transition-colors"}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className={pathname === "/about" 
                ? "text-foreground font-medium" 
                : "text-foreground/60 hover:text-foreground/80 transition-colors"}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={pathname === "/contact" 
                ? "text-foreground font-medium" 
                : "text-foreground/60 hover:text-foreground/80 transition-colors"}
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/PrankurShukla" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/prankur-shukla-07bb18241/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:shuklaprankur27@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
} 