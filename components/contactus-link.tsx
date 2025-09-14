'use client'

import Link from 'next/link'

export default function ContactSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="w-full mt-10 py-5 rounded-lg border bg-card">
      <div className="container mx-auto md:px-6 px-4">
        {/* First line */}
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
          Let&apos;s talk about your project
        </h2>
        
        {/* Second line */}
        <p className="text-sm md:text-base mb-5 text-muted-foreground max-w-2xl mx-auto">
          We help companies and individuals build out their digital presence.
        </p>
        
        {/* Third line with button and link */}
        <div className="flex gap-6">
          <Link 
            href="/contact"
            className="px-6 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            Let&apos;s talk
          </Link>
          
          <button
            onClick={scrollToTop}
            className="text-foreground font-medium flex items-center justify-center gap-1 hover:underline"
          >
            Learn more →
          </button>
        </div>
      </div>
    </section>
  )
}