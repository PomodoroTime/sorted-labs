'use client'

import { motion } from 'framer-motion'
import { Mail, Code, Zap, Layers } from 'lucide-react'

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

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
          >
            Build it{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, oklch(0.65 0.15 200), oklch(0.7 0.15 180), oklch(0.65 0.12 160))',
              }}
            >
              right
            </span>
            <br />
            Build it{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, oklch(0.65 0.15 200), oklch(0.7 0.15 180), oklch(0.65 0.12 160))',
              }}
            >
              fast
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            Production-ready web applications and AI-powered solutions.
            <br />
            From concept to deployment, we move at speed without compromise.
          </motion.p>

          {/* What We Do */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
          >
            {[
              {
                icon: <Code className="h-6 w-6" />,
                title: 'Full-Stack Development',
                desc: 'Next.js, TypeScript, Supabase, Vercel',
              },
              {
                icon: <Zap className="h-6 w-6" />,
                title: 'Rapid Prototyping',
                desc: 'Production-ready MVPs in days, not months',
              },
              {
                icon: <Layers className="h-6 w-6" />,
                title: 'AI Integration',
                desc: 'LLM-powered features, automation, intelligence',
              },
              {
                icon: <Mail className="h-6 w-6" />,
                title: 'End-to-End',
                desc: 'Strategy, design, build, deploy, support',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm p-6 hover:bg-card/50 transition-colors"
              >
                <div className="mb-3 text-foreground/70">{item.icon}</div>
                <h3 className="font-semibold mb-2 text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
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
          <p>© {new Date().getFullYear()} Sorted Labs Ltd. All rights reserved.</p>
          <p className="mt-2">Registered in England and Wales</p>
        </div>
      </footer>
    </main>
  )
}
