import type { Metadata } from 'next'
import React from 'react'
import { Inter } from 'next/font/google'
import MenuSvg from 'sv/menu_svg'
import Menu from 'cp/menu'
import 'st/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Texh Cell Xpress',
  description: 'Cell Phone Store Manager',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <h1>Tech Cell Xpress</h1>
          <Menu />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <a
            href="https://icons8.com/icon/DoFiicbRPzDS/página-no-encontrada">página
            no encontrada</a> icon by <a href="https://icons8.com">Icons8</a>
        </footer>
      </body>
    </html>
  )
}
