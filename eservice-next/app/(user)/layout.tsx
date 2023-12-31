import { Inter } from 'next/font/google'
import { Providers } from '@/app/providers'
const inter = Inter({ subsets: ['latin'] })
import NavBar from '@/components/NavBar'
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=' bg-gray-100'>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
