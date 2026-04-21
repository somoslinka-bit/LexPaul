'use client'

import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const differentiators = [
  {
    icon: StarIcon,
    title: 'Especialización exclusiva en extranjería',
    description:
      'Solo trabajamos con trámites migratorios. No somos un despacho generalista. Conocemos cada detalle, cada plazo y cada requisito.',
  },
  {
    icon: GlobeIcon,
    title: 'Hablamos tu idioma y entendemos tu situación',
    description:
      'Sabemos lo que implica estar lejos de casa lidiando con papeles y burocracia. Acá no te vamos a hablar en jurídico.',
  },
  {
    icon: RouteIcon,
    title: 'Acompañamiento de principio a fin',
    description:
      'No desaparecemos después del primer correo. Seguimos tu caso hasta resolverlo y te mantenemos informado en cada etapa.',
  },
]

// TODO: REEMPLAZAR con estadísticas reales
const stats = [
  { value: '+500', label: 'casos resueltos' },
  { value: '8 años', label: 'de experiencia' },
  { value: '+20', label: 'nacionalidades atendidas' },
]

export default function WhyLexPaul() {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2
            className="font-lora font-bold text-text max-w-2xl mx-auto"
            style={{ fontSize: 'clamp(22px, 4vw, 34px)' }}
          >
            Por qué miles de latinoamericanos confían en LEX-PAUL
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {differentiators.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="flex flex-col items-start gap-4"
            >
              <div className="w-12 h-12 rounded-card bg-bg flex items-center justify-center text-accent flex-shrink-0">
                <item.icon />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-text text-base mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="bg-bg rounded-card py-10 px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeInUp} className="flex flex-col items-center gap-1">
              <span className="font-lora font-bold text-accent" style={{ fontSize: 'clamp(32px, 6vw, 48px)' }}>
                {stat.value}
              </span>
              <span className="font-sans text-text-muted text-sm">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
      <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
      <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  )
}

function RouteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
      <path d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
    </svg>
  )
}
