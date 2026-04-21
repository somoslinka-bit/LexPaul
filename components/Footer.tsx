const serviciosLinks = [
  'Solicitud de Asilo',
  'Tarjeta de Identidad (TIE)',
  'Toma de Huellas',
  'Canje de Licencia',
  'Reagrupamiento Familiar',
  'Consulta de Extranjería',
]

const legalLinks = ['Aviso legal', 'Política de privacidad', 'Cookies']

export default function Footer() {
  return (
    <footer className="bg-primary pt-14 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-10 border-b border-white/10">

          {/* Logo + tagline */}
          <div className="flex flex-col gap-3">
            <div>
              <span className="font-lora font-bold text-2xl text-accent block">LEX-PAUL</span>
              <span className="font-sans text-white/50 text-xs mt-0.5 block tracking-wide">
                Abogado de Extranjería · España
              </span>
            </div>
            <p className="font-sans text-white/55 text-sm leading-relaxed max-w-xs">
              Especialistas en trámites migratorios para latinoamericanos en toda España.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-sans font-semibold text-white text-sm mb-4 uppercase tracking-widest">
              Servicios
            </h3>
            <ul className="flex flex-col gap-2.5">
              {serviciosLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#servicios"
                    className="font-sans text-white/55 hover:text-white/85 text-sm transition-colors duration-200 cursor-pointer"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto + Legal */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-sans font-semibold text-white text-sm mb-4 uppercase tracking-widest">
                Contacto
              </h3>
              <ul className="flex flex-col gap-3">
                {/* TODO: REEMPLAZAR con número de WhatsApp real */}
                <li className="flex items-center gap-2.5">
                  <WhatsAppIcon className="w-4 h-4 text-whatsapp flex-shrink-0" />
                  <a
                    href="https://wa.me/NUMERO_PLACEHOLDER"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-white/55 hover:text-white/85 text-sm transition-colors duration-200 cursor-pointer"
                  >
                    +34 600 000 000
                  </a>
                </li>
                {/* TODO: REEMPLAZAR con email real */}
                <li className="flex items-center gap-2.5">
                  <EmailIcon className="w-4 h-4 text-white/40 flex-shrink-0" />
                  <a
                    href="mailto:contacto@lexpaulabogados.es"
                    className="font-sans text-white/55 hover:text-white/85 text-sm transition-colors duration-200 cursor-pointer"
                  >
                    contacto@lexpaulabogados.es
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <LocationIcon className="w-4 h-4 text-white/40 flex-shrink-0" />
                  <span className="font-sans text-white/55 text-sm">España</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-sans font-semibold text-white text-sm mb-4 uppercase tracking-widest">
                Legal
              </h3>
              <ul className="flex flex-col gap-2.5">
                {legalLinks.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="font-sans text-white/55 hover:text-white/85 text-sm transition-colors duration-200 cursor-pointer"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-sans text-white/35 text-xs text-center sm:text-left">
            © 2026 LEX-PAUL · Todos los derechos reservados
          </p>
          <p className="font-sans text-white/25 text-xs">
            Abogado de Extranjería e Inmigración en España
          </p>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.858L.036 23.999l6.291-1.651A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.891 0-3.651-.507-5.162-1.39l-.37-.22-3.734.979 1-3.635-.24-.378A9.635 9.635 0 012.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z" />
    </svg>
  )
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )
}
