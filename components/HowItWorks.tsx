'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Consulta inicial gratuita',
    description:
      'Contanos tu caso por WhatsApp o completá el formulario. Sin costo, sin compromiso.',
  },
  {
    number: '02',
    title: 'Evaluamos tu situación',
    description:
      'Analizamos tu caso y te explicamos exactamente qué opciones tenés y cuáles son los pasos.',
  },
  {
    number: '03',
    title: 'Preparamos tu documentación',
    description:
      'Nos encargamos de cada papel, formulario y requisito para que no tengas que preocuparte.',
  },
  {
    number: '04',
    title: 'Seguimiento hasta el final',
    description:
      'Te informamos de cada avance y te acompañamos hasta que tu trámite esté resuelto.',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-primary py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2
            className="font-lora font-bold text-white"
            style={{ fontSize: 'clamp(22px, 4vw, 34px)' }}
          >
            Así es trabajar con nosotros
          </h2>
        </motion.div>

        {/* Desktop: horizontal */}
        <div className="hidden md:flex items-start gap-0">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex-1 flex flex-col items-center text-center px-4">
              {/* Conector horizontal (no el último) */}
              {index < steps.length - 1 && (
                <div className="absolute top-5 left-1/2 right-0 h-px bg-white/15 z-0" />
              )}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
                className="relative z-10 flex flex-col items-center"
              >
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-lora font-bold text-primary text-sm mb-5 flex-shrink-0">
                  {step.number}
                </div>
                <h3 className="font-lora font-semibold text-white text-base mb-2">
                  {step.title}
                </h3>
                <p className="font-sans text-white/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="flex flex-col gap-0 md:hidden">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex gap-5">
              {/* Conector vertical (no el último) */}
              {index < steps.length - 1 && (
                <div className="absolute left-5 top-10 bottom-0 w-px bg-white/15 z-0" />
              )}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
                className="relative z-10 flex gap-5 pb-8 last:pb-0"
              >
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-lora font-bold text-primary text-sm flex-shrink-0">
                  {step.number}
                </div>
                <div className="pt-1.5">
                  <h3 className="font-lora font-semibold text-white text-base mb-1.5">
                    {step.title}
                  </h3>
                  <p className="font-sans text-white/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          className="text-center mt-12 sm:mt-16"
        >
          <a
            href="#consulta"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-sans font-semibold text-base px-8 py-3.5 rounded-btn transition-colors duration-200 cursor-pointer min-h-[52px]"
          >
            Empezar ahora — es gratis
          </a>
        </motion.div>
      </div>
    </section>
  )
}
