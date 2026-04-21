'use client'

import React, { useState, useEffect, useRef, useMemo } from 'react'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'

interface BlurTextProps {
  text: string
  delay?: number
  animateBy?: 'words' | 'letters'
  direction?: 'top' | 'bottom'
  className?: string
  style?: React.CSSProperties
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 50,
  animateBy = 'words',
  direction = 'top',
  className = '',
  style,
}) => {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  const segments = useMemo(() => {
    return animateBy === 'words' ? text.split(' ') : text.split('')
  }, [text, animateBy])

  return (
    <p ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {segments.map((segment, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            filter: inView ? 'blur(0px)' : 'blur(10px)',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : `translateY(${direction === 'top' ? '-20px' : '20px'})`,
            transition: `all 0.5s ease-out ${i * delay}ms`,
          }}
        >
          {segment}
          {animateBy === 'words' && i < segments.length - 1 ? ' ' : ''}
        </span>
      ))}
    </p>
  )
}

const menuItems = [
  { label: 'INICIO', href: '#', highlight: true },
  { label: 'SERVICIOS', href: '#servicios' },
  { label: 'CÓMO FUNCIONA', href: '#como-funciona' },
  { label: 'CONSULTA', href: '#consulta' },
]

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#0B1F3A', color: '#F5F3EE' }}>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-5">
        <nav className="flex items-center justify-between max-w-screen-2xl mx-auto">

          {/* Hamburger */}
          <div className="relative">
            <button
              ref={buttonRef}
              type="button"
              className="p-2 transition-colors duration-300"
              style={{ color: 'rgba(245,243,238,0.45)' }}
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen
                ? <X className="w-7 h-7" strokeWidth={2} />
                : <Menu className="w-7 h-7" strokeWidth={2} />
              }
            </button>

            {isMenuOpen && (
              <div
                ref={menuRef}
                className="absolute top-full left-0 w-[220px] shadow-2xl mt-2 ml-2 p-4 rounded-xl z-[100]"
                style={{ backgroundColor: '#0B1F3A', border: '1px solid rgba(200,150,62,0.25)' }}
              >
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-sm font-bold tracking-widest py-2 px-2 cursor-pointer transition-colors duration-200"
                    style={{
                      color: item.highlight ? '#C8963E' : 'rgba(245,243,238,0.75)',
                      fontFamily: 'var(--font-dm-sans)',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#C8963E' }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = item.highlight ? '#C8963E' : 'rgba(245,243,238,0.75)'
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(200,150,62,0.2)' }}>
                  <a
                    href="#consulta"
                    className="block text-center text-xs font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200"
                    style={{ backgroundColor: '#C8963E', color: '#fff', fontFamily: 'var(--font-dm-sans)' }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Consulta gratis
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Wordmark */}
          <span
            className="text-xl font-bold tracking-widest"
            style={{ color: '#C8963E', fontFamily: 'var(--font-lora)' }}
          >
            LEX-PAUL
          </span>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/NUMERO_PLACEHOLDER?text=Hola%2C%20me%20gustar%C3%ADa%20hacer%20una%20consulta%20migratoria."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg transition-opacity duration-200 hover:opacity-80"
            style={{ backgroundColor: '#25D366', color: '#fff', fontFamily: 'var(--font-dm-sans)' }}
          >
            WhatsApp
          </a>
        </nav>
      </header>

      {/* Hero */}
      <main className="relative min-h-screen flex flex-col">

        {/* Nombre centrado */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
          <div className="relative text-center">
            <BlurText
              text="PAUL"
              delay={90}
              animateBy="letters"
              direction="top"
              className="font-bold text-[22vw] sm:text-[140px] md:text-[175px] lg:text-[205px] leading-[0.78] tracking-tighter uppercase justify-center whitespace-nowrap"
              style={{ color: '#C8963E', fontFamily: 'var(--font-lora)' }}
            />
            <BlurText
              text="AVHUST"
              delay={90}
              animateBy="letters"
              direction="top"
              className="font-bold text-[22vw] sm:text-[140px] md:text-[175px] lg:text-[205px] leading-[0.78] tracking-tighter uppercase justify-center whitespace-nowrap"
              style={{ color: '#C8963E', fontFamily: 'var(--font-lora)' }}
            />

            {/* Foto */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative w-[58px] h-[98px] sm:w-[82px] sm:h-[138px] md:w-[100px] md:h-[168px] lg:w-[118px] lg:h-[200px] rounded-full overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105 cursor-pointer"
                style={{ boxShadow: '0 0 0 3px rgba(200,150,62,0.35), 0 8px 32px rgba(11,31,58,0.5)' }}
              >
                <Image
                  src="/paul-avhust.png"
                  alt="Paul Avhust — Abogado especialista en Extranjería e Inmigración"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 58px, (max-width: 768px) 82px, (max-width: 1024px) 100px, 118px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-32 left-1/2 -translate-x-1/2 w-full px-6">
          <div className="flex justify-center">
            <BlurText
              text="Abogado de extranjería para latinoamericanos en España."
              delay={120}
              animateBy="words"
              direction="top"
              className="text-[13px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-center justify-center"
              style={{ color: 'rgba(245,243,238,0.55)', fontFamily: 'var(--font-dm-sans)' }}
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          type="button"
          className="absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-300 hover:opacity-100"
          style={{ opacity: 0.35 }}
          aria-label="Scroll hacia abajo"
          onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#F5F3EE' }} />
        </button>

      </main>
    </div>
  )
}
