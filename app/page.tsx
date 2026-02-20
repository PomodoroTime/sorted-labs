'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Ambient gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full"
            style={{
              background: 'radial-gradient(circle, oklch(0.55 0.15 200) 0%, transparent 70%)',
            }}
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, oklch(0.55 0.12 180) 0%, transparent 70%)',
            }}
          />
        </div>

        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-12"
          >
            <Image
              src="/logo-sorted.png"
              alt="Sorted"
              width={280}
              height={80}
              className="mx-auto"
              priority
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-xl sm:text-2xl text-foreground max-w-2xl mx-auto mb-16 leading-relaxed font-medium"
          >
            We build web apps that work.
            <br />
            Fast, clean, production-ready.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-6 text-left max-w-xl mx-auto mb-16"
          >
            <p className="text-muted-foreground leading-relaxed">
              Next.js, TypeScript, Supabase, Vercel. Modern stack, no unnecessary complexity.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We ship MVPs in days, not months. You get production-quality code from day one.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              No pitches, no filler. Just good work.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <a
              href="mailto:hello@sortedlabs.co.uk"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-colors font-medium"
            >
              <Mail className="h-4 w-4" />
              hello@sortedlabs.co.uk
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/40 bg-card/30 backdrop-blur-sm py-8">
        <div className="mx-auto max-w-5xl px-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Sorted Labs Ltd</p>
        </div>
      </footer>
    </main>
  )
}
