import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Open_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={openSans.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
