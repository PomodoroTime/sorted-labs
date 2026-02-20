'use client'

import { motion, useInView } from 'framer-motion'
import { Mail } from 'lucide-react'
import { useRef } from 'react'

function FadeIn({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#fafafa] selection:bg-white/20">
      {/* Ambient glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[1000px] h-[800px] opacity-[0.07]"
          style={{
            background: 'radial-gradient(ellipse at 70% 20%, oklch(0.6 0.15 200), transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[800px] h-[600px] opacity-[0.05]"
          style={{
            background: 'radial-gradient(ellipse at 30% 80%, oklch(0.6 0.12 260), transparent 70%)',
          }}
        />
      </div>

      {/* Grain */}
      <div
        className="fixed inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10">
        {/* Nav */}
        <nav className="mx-auto max-w-5xl px-6 py-8">
          <FadeIn>
            <span className="text-xl font-bold tracking-tight">
              Sorted<span className="text-white/30">.</span>
            </span>
          </FadeIn>
        </nav>

        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 pt-24 sm:pt-32 pb-32">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-8">
              Your business is unique.
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #fafafa 0%, rgba(250,250,250,0.5) 100%)',
                }}
              >
                Your software should be too.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-lg sm:text-xl text-white/50 leading-relaxed max-w-2xl">
              A micro-SaaS studio from the North West of England, building software
              around the way you actually work — not the other way around.
            </p>
          </FadeIn>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-5xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* How we work */}
        <section className="mx-auto max-w-5xl px-6 py-32">
          <FadeIn>
            <p className="text-xs font-medium text-white/30 uppercase tracking-[0.2em] mb-16">
              How we work
            </p>
          </FadeIn>

          <div className="space-y-20">
            {[
              {
                num: '01',
                title: 'We listen first.',
                body: "Every business has its own rhythm, its own pain points, its own way of doing things. We don't show up with a template and hope it fits. We sit down, understand your world, and design around it.",
              },
              {
                num: '02',
                title: "We move fast, but we don't rush.",
                body: "You'll see working software quickly — not mockups, not slide decks. Real tools you can use from day one. We iterate together until it's exactly right.",
              },
              {
                num: '03',
                title: 'We build things that last.',
                body: "Clean, modern technology that grows with you. No lock-in, no bloat, no mystery code. Software you can rely on and that your customers will love using.",
              },
            ].map((item, i) => (
              <FadeIn key={item.num} delay={i * 0.05}>
                <div className="grid sm:grid-cols-[60px_1fr] gap-4 sm:gap-8">
                  <span className="text-sm font-mono text-white/20">{item.num}</span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4">{item.title}</h3>
                    <p className="text-white/50 leading-relaxed max-w-xl">{item.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-5xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Quote */}
        <section className="mx-auto max-w-5xl px-6 py-32">
          <FadeIn>
            <div className="relative">
              <div
                className="absolute -inset-px rounded-2xl opacity-50"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
                }}
              />
              <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8 sm:p-12">
                <p className="text-lg sm:text-xl leading-relaxed font-medium text-white/80">
                  &ldquo;Technology should give people superpowers, not headaches.
                  We put your customers at the centre of everything we build, because
                  that&apos;s where they belong.&rdquo;
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-5xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Contact */}
        <section className="mx-auto max-w-5xl px-6 py-32">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              Got a problem worth solving?
            </h2>
            <p className="text-white/50 mb-12">
              Tell us about it. No obligation, just a conversation.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
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
                  className="w-full px-4 py-3 rounded-lg border border-white/[0.08] bg-white/[0.03] text-white placeholder:text-white/25 focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-white/[0.08] bg-white/[0.03] text-white placeholder:text-white/25 focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all"
                />
              </div>
              <textarea
                name="message"
                placeholder="What are you working on?"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-lg border border-white/[0.08] bg-white/[0.03] text-white placeholder:text-white/25 focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all resize-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-[#0a0a0a] hover:bg-white/90 transition-colors font-medium"
              >
                <Mail className="h-4 w-4" />
                Send it
              </button>
            </form>
          </FadeIn>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/[0.06] py-8">
          <div className="mx-auto max-w-5xl px-6 text-center text-sm text-white/25 space-y-1">
            <p>© {new Date().getFullYear()} Sorted Labs Ltd</p>
            <p>Company No. 17022192 · 55 Hoghton Street, Southport PR9 0PG</p>
          </div>
        </footer>
      </div>
    </main>
  )
}
