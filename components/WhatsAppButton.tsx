'use client'

import { useEffect, useState } from 'react'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative group">
        {/* Ping */}
        <span
          className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-25"
          aria-hidden="true"
        />

        {/* Tooltip — solo desktop */}
        <div
          className="absolute bottom-full right-0 mb-2.5 px-3 py-1.5 bg-text text-white text-xs font-sans rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:block"
          role="tooltip"
        >
          Consultar por WhatsApp
          <div className="absolute top-full right-4 border-4 border-transparent border-t-text" />
        </div>

        {/* Botón */}
        <a
          href="https://wa.me/NUMERO_PLACEHOLDER?text=Hola%2C%20me%20gustar%C3%ADa%20hacer%20una%20consulta%20sobre%20mi%20situaci%C3%B3n%20migratoria."
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-whatsapp hover:bg-whatsapp-dark rounded-full shadow-float transition-colors duration-200 cursor-pointer"
          aria-label="Consultar por WhatsApp"
        >
          <WhatsAppIcon className="w-7 h-7 text-white" />
        </a>
      </div>
    </div>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.858L.036 23.999l6.291-1.651A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.891 0-3.651-.507-5.162-1.39l-.37-.22-3.734.979 1-3.635-.24-.378A9.635 9.635 0 012.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z" />
    </svg>
  )
}
