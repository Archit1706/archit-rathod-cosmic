import './globals.css'
import { Inter } from 'next/font/google'
import ClientWrapper from './components/ClientWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Archit Rathod - Machine Learning Engineer & Full Stack Developer',
  description: 'Portfolio of Archit Rathod, Machine Learning Engineer with expertise in AI, web development, and research. Currently pursuing MS in Computer Science at UIC.',
  keywords: [
    'Archit Rathod',
    'Machine Learning Engineer',
    'Full Stack Developer',
    'AI Research',
    'Next.js',
    'React',
    'Python',
    'University of Illinois Chicago',
    'Portfolio'
  ],
  authors: [{ name: 'Archit Rathod' }],
  creator: 'Archit Rathod',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ cursor: 'none' }}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  )
}