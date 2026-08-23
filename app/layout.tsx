import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'MSA Group | Marine & Cargo Surveys',
  description: 'Independent marine inspection, draft surveys, and bunker quantity measurements.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}