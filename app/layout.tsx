import type { Metadata } from 'next'
import { Lora, DM_Sans } from 'next/font/google'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-lora',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'LEX-PAUL — Abogado de Extranjería e Inmigración en España',
  description:
    'Abogado especialista en extranjería para latinoamericanos en España. Asilo, TIE, toma de huellas, canje de licencia. Consulta gratis.',
  robots: 'index, follow',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${lora.variable} ${dmSans.variable}`}>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
