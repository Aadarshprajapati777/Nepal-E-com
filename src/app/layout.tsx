import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nepal E-Commerce',
  description: 'One step towards digital Nepal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="p-12 max-w-7xl min-w-[300px]">
        {children}
        </main>
        
        </body>
    </html>
  )
}
