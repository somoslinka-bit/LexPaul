'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

type FormValues = {
  nombre: string
  email: string
  pais: string
  tramite: string
  mensaje: string
}

const paises = [
  'Argentina', 'Bolivia', 'Brasil', 'Chile', 'Colombia', 'Costa Rica',
  'Cuba', 'Ecuador', 'El Salvador', 'Guatemala', 'Honduras', 'México',
  'Nicaragua', 'Panamá', 'Paraguay', 'Perú', 'República Dominicana',
  'Uruguay', 'Venezuela', 'Otro',
]

const tramites = [
  'Solicitud de Asilo',
  'Tarjeta de Identidad (TIE)',
  'Toma de Huellas',
  'Canje de Licencia',
  'Reagrupamiento Familiar',
  'Consulta de Extranjería',
  'No sé / consulta general',
]

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit = (_data: FormValues) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <section id="consulta" className="bg-surface py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Columna izquierda */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col gap-6"
          >
            <div>
              <h2
                className="font-lora font-bold text-text mb-3"
                style={{ fontSize: 'clamp(22px, 4vw, 34px)' }}
              >
                Consultá gratis, sin compromiso
              </h2>
              <p className="font-sans text-text-muted text-base leading-relaxed">
                Completá el formulario y te respondemos en menos de 24 horas. Si es urgente,
                escribinos directo por WhatsApp.
              </p>
            </div>

            <a
              href="https://wa.me/NUMERO_PLACEHOLDER?text=Hola%2C%20me%20gustar%C3%ADa%20hacer%20una%20consulta%20sobre%20mi%20situaci%C3%B3n%20migratoria."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-whatsapp hover:bg-whatsapp-dark text-white font-sans font-semibold text-sm px-5 py-3 rounded-btn transition-colors duration-200 cursor-pointer self-start min-h-[44px]"
            >
              <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
              Escribir por WhatsApp ahora →
            </a>

            <div className="flex flex-col gap-3 pt-2">
              {[
                'Sin costo la consulta inicial',
                'Respuesta en menos de 24 horas',
                'Tu información es confidencial',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-3 h-3 text-accent" />
                  </div>
                  <span className="font-sans text-text-muted text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {submitted ? (
              <div className="bg-bg border border-border rounded-card p-8 text-center flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center">
                  <CheckIcon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-lora font-semibold text-text text-lg mb-1">
                    ¡Consulta recibida!
                  </h3>
                  <p className="font-sans text-text-muted text-sm leading-relaxed">
                    Te respondemos en menos de 24 horas. Si es urgente,
                    escribinos por WhatsApp.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-bg border border-border rounded-card p-6 sm:p-8 flex flex-col gap-5"
                noValidate
              >
                {/* Nombre */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="nombre" className="font-sans font-medium text-text text-sm">
                    Nombre completo <span className="text-accent">*</span>
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    placeholder="Tu nombre completo"
                    autoComplete="name"
                    className={`w-full font-sans text-sm text-text bg-surface border rounded-btn px-4 py-3 min-h-[44px] outline-none transition-colors duration-200 placeholder:text-text-muted/50 focus:border-accent ${
                      errors.nombre ? 'border-red-400' : 'border-border'
                    }`}
                    {...register('nombre', { required: 'El nombre es obligatorio' })}
                  />
                  {errors.nombre && (
                    <p className="font-sans text-red-500 text-xs">{errors.nombre.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-sans font-medium text-text text-sm">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    autoComplete="email"
                    className={`w-full font-sans text-sm text-text bg-surface border rounded-btn px-4 py-3 min-h-[44px] outline-none transition-colors duration-200 placeholder:text-text-muted/50 focus:border-accent ${
                      errors.email ? 'border-red-400' : 'border-border'
                    }`}
                    {...register('email', {
                      required: 'El email es obligatorio',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Ingresá un email válido',
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="font-sans text-red-500 text-xs">{errors.email.message}</p>
                  )}
                </div>

                {/* País */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="pais" className="font-sans font-medium text-text text-sm">
                    País de origen <span className="text-accent">*</span>
                  </label>
                  <select
                    id="pais"
                    className={`w-full font-sans text-sm text-text bg-surface border rounded-btn px-4 py-3 min-h-[44px] outline-none transition-colors duration-200 focus:border-accent cursor-pointer ${
                      errors.pais ? 'border-red-400' : 'border-border'
                    }`}
                    {...register('pais', { required: 'Seleccioná tu país de origen' })}
                  >
                    <option value="">Seleccioná tu país</option>
                    {paises.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                  {errors.pais && (
                    <p className="font-sans text-red-500 text-xs">{errors.pais.message}</p>
                  )}
                </div>

                {/* Trámite */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="tramite" className="font-sans font-medium text-text text-sm">
                    Trámite que necesitás <span className="text-accent">*</span>
                  </label>
                  <select
                    id="tramite"
                    className={`w-full font-sans text-sm text-text bg-surface border rounded-btn px-4 py-3 min-h-[44px] outline-none transition-colors duration-200 focus:border-accent cursor-pointer ${
                      errors.tramite ? 'border-red-400' : 'border-border'
                    }`}
                    {...register('tramite', { required: 'Seleccioná el trámite que necesitás' })}
                  >
                    <option value="">Seleccioná el trámite</option>
                    {tramites.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  {errors.tramite && (
                    <p className="font-sans text-red-500 text-xs">{errors.tramite.message}</p>
                  )}
                </div>

                {/* Mensaje */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="mensaje" className="font-sans font-medium text-text text-sm">
                    Contanos brevemente tu situación{' '}
                    <span className="text-text-muted font-normal">(opcional)</span>
                  </label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    placeholder="Describí tu situación en pocas palabras..."
                    className="w-full font-sans text-sm text-text bg-surface border border-border rounded-btn px-4 py-3 outline-none transition-colors duration-200 placeholder:text-text-muted/50 focus:border-accent resize-none"
                    {...register('mensaje')}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark disabled:opacity-70 disabled:cursor-not-allowed text-white font-sans font-semibold text-base px-6 py-3.5 rounded-btn transition-colors duration-200 cursor-pointer min-h-[52px]"
                >
                  {loading ? (
                    <>
                      <SpinnerIcon className="w-4 h-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Enviar consulta'
                  )}
                </button>

                <p className="font-sans text-text-muted text-xs text-center leading-relaxed">
                  Tu información es tratada de forma confidencial conforme al RGPD.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.858L.036 23.999l6.291-1.651A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.891 0-3.651-.507-5.162-1.39l-.37-.22-3.734.979 1-3.635-.24-.378A9.635 9.635 0 012.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function SpinnerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" d="M12 2a10 10 0 0 1 10 10" />
    </svg>
  )
}
