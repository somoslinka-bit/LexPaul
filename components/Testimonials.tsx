'use client'

import { motion } from 'framer-motion'

// TODO: REEMPLAZAR CON TESTIMONIOS REALES
const testimonials = [
  {
    name: 'María G.',
    country: 'Venezuela',
    service: 'Solicitud de Asilo',
    text: 'Paul me ayudó en uno de los momentos más difíciles de mi vida. Explicó todo con claridad, respondió cada duda y mi solicitud salió adelante. No sé qué hubiera hecho sin su ayuda.',
  },
  {
    name: 'Carlos R.',
    country: 'Colombia',
    service: 'Canje de Licencia',
    text: 'Pensé que iba a ser un proceso eterno pero con LEX-PAUL fue rápido y sin complicaciones. Me guiaron en cada paso y ahora tengo mi carnet europeo. Muy recomendable.',
  },
  {
    name: 'Ana P.',
    country: 'Perú',
    service: 'Reagrupamiento Familiar',
    text: 'Gracias a Paul pude traer a mis hijos a España de forma legal. Fue un proceso largo pero siempre estuvieron disponibles, informándome y dando seguimiento al caso. Eternamente agradecida.',
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function Testimonials() {
  return (
    <section className="bg-bg py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2
            className="font-lora font-bold text-text"
            style={{ fontSize: 'clamp(22px, 4vw, 34px)' }}
          >
            Lo que dicen nuestros clientes
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeInUp}
              className="bg-surface border border-border rounded-card p-6 shadow-card flex flex-col gap-4"
            >
              {/* Estrellas */}
              <div className="flex gap-0.5" aria-label="5 de 5 estrellas">
                {[...Array(5)].map((_, i) => (
                  <StarFilledIcon key={i} />
                ))}
              </div>

              {/* Texto */}
              <p className="font-sans text-text text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Persona */}
              <div className="flex items-center gap-3 pt-1 border-t border-border">
                <div className="w-9 h-9 rounded-full bg-bg flex items-center justify-center flex-shrink-0">
                  <span className="font-sans font-semibold text-text-muted text-xs">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-sans font-semibold text-text text-sm">{t.name}</p>
                  <p className="font-sans text-text-muted text-xs">
                    {t.country} · {t.service}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function StarFilledIcon() {
  return (
    <svg className="w-4 h-4 text-accent" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}
