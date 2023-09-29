import './globals.css'
import type { Metadata } from 'next'




export const metadata: Metadata = {
  title: 'My Next Phone',
  description: 'Your Guide To Get The Perfict Phone For You!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        {children}
        </body>
    </html>
  )
}
