import './globals.css'
import { Inter } from 'next/font/google'
import { TaskProvider } from '@/context/TaskContext'
import { NavBar } from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TaskProvider>
          <NavBar />
          {children}
        </TaskProvider>
      </body>
    </html>
  )
}
