export default function Hero() {
  return (
    <section className="hero-bg hero-noise relative overflow-hidden pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">

          {/* Columna texto */}
          <div className="flex-1 lg:max-w-[55%]">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-white/25 rounded-full px-4 py-1.5 mb-6">
              <span className="text-white/85 text-xs font-sans font-medium tracking-wide">
                Especialista en Extranjería · España 🇪🇸
              </span>
            </div>

            {/* H1 */}
            <h1
              className="font-lora font-bold leading-tight mb-5"
              style={{ fontSize: 'clamp(28px, 5.5vw, 50px)' }}
            >
              <span className="block text-white">Resolvé tu situación migratoria</span>
              <span className="block text-accent">con un abogado de confianza</span>
            </h1>

            {/* Subtítulo */}
            <p className="font-sans text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              Asilo, TIE, toma de huellas, canje de licencia y más.
              Atención para latinoamericanos en toda España.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href="https://wa.me/NUMERO_PLACEHOLDER?text=Hola%2C%20me%20gustar%C3%ADa%20hacer%20una%20consulta%20sobre%20mi%20situaci%C3%B3n%20migratoria."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-whatsapp hover:bg-whatsapp-dark text-white font-sans font-semibold text-base px-6 py-3.5 rounded-btn transition-colors duration-200 cursor-pointer min-h-[52px]"
              >
                <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                Consultar por WhatsApp
              </a>
              <a
                href="#servicios"
                className="flex items-center justify-center border border-white/35 hover:border-white/60 hover:bg-white/5 text-white font-sans font-semibold text-base px-6 py-3.5 rounded-btn transition-all duration-200 cursor-pointer min-h-[52px]"
              >
                Ver servicios
              </a>
            </div>

            {/* Trust bar */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <TrustItem icon={<LockIcon />} label="Consulta confidencial" />
              <span className="text-white/25 hidden sm:block">·</span>
              <TrustItem icon={<BoltIcon />} label="Respuesta en 24hs" />
              <span className="text-white/25 hidden sm:block">·</span>
              <TrustItem icon={<MapPinIcon />} label="Toda España" />
            </div>
          </div>

          {/* Columna imagen */}
          {/* TODO: REEMPLAZAR con foto real de Paul Avhust */}
          <div className="mt-10 lg:mt-0 lg:flex-shrink-0 lg:w-[38%]">
            <div
              className="relative rounded-xl overflow-hidden bg-primary-mid border border-white/10 flex items-center justify-center"
              style={{ aspectRatio: '3/4', maxHeight: '420px' }}
            >
              <div className="text-center px-6">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                  <UserIcon className="w-8 h-8 text-white/50" />
                </div>
                <p className="text-white/50 font-sans text-sm">Foto Paul Avhust</p>
                <p className="text-white/30 font-sans text-xs mt-1">3:4 · reemplazar con foto real</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary/80 to-transparent">
                <p className="text-white font-lora font-semibold text-base">Paul Avhust</p>
                <p className="text-white/65 font-sans text-xs mt-0.5">Abogado especialista en Extranjería</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function TrustItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-accent/80 w-4 h-4 flex-shrink-0">{icon}</span>
      <span className="text-white/65 font-sans text-xs font-medium">{label}</span>
    </div>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.858L.036 23.999l6.291-1.651A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.891 0-3.651-.507-5.162-1.39l-.37-.22-3.734.979 1-3.635-.24-.378A9.635 9.635 0 012.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  )
}
