import './globals.css'
import NavBar from './components/NavBar'

export const metadata = {
  title: 'JR App',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-[#07090f] text-[#e8eaf0]">
        <NavBar />
        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
          {children}
        </main>
      </body>
    </html>
  )
}
