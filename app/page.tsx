'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import Image from 'next/image'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden px-6">
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

        <div className="relative z-10 mx-auto max-w-3xl">
          {/* Logo */}
          <motion.div {...fadeUp} className="pt-32 sm:pt-40 mb-20">
            <Image
              src="/logo-sorted.png"
              alt="Sorted"
              width={280}
              height={80}
              className="mx-auto"
              priority
            />
          </motion.div>

          {/* Hero statement */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mb-24"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight mb-8">
              Your business is unique.
              <br />
              Your software should be too.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              We're a micro-SaaS studio that builds software around the way you
              actually work — not the other way around.
            </p>
          </motion.div>

          {/* Approach */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mb-24"
          >
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-10">
              How we work
            </h2>

            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-semibold mb-3">We listen first.</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every business has its own rhythm, its own pain points, its own way
                  of doing things. We don't show up with a template and hope it fits.
                  We sit down, understand your world, and design around it.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">We move fast, but we don't rush.</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You'll see working software quickly — not mockups, not slide decks.
                  Real tools you can use from day one. We iterate together until
                  it's exactly right.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">We build things that last.</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Clean, modern technology that grows with you. No lock-in, no
                  bloat, no mystery code. Software you can rely on and that your
                  customers will love using.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="mb-24"
          >
            <div className="rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm p-8 sm:p-10">
              <p className="text-lg sm:text-xl leading-relaxed font-medium">
                "Technology should give people superpowers, not headaches.
                We put your customers at the centre of everything we build, because
                that's where they belong."
              </p>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.4 }}
            className="pb-32"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Got a problem worth solving?
            </h2>
            <p className="text-muted-foreground mb-10">
              Tell us about it. No obligation, just a conversation.
            </p>
            <form
              action="https://formspree.io/f/mnjbblvy"
              method="POST"
              className="space-y-4 max-w-lg"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border/60 bg-card/30 backdrop-blur-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/30 transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border/60 bg-card/30 backdrop-blur-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/30 transition-all"
                />
              </div>
              <textarea
                name="message"
                placeholder="What are you working on?"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-lg border border-border/60 bg-card/30 backdrop-blur-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/30 transition-all resize-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-colors font-medium"
              >
                <Mail className="h-4 w-4" />
                Send it
              </button>
            </form>
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
