import './globals.css'

export const metadata = {
  title: 'JR App',
}

const navLinks = [
  { href: '/', label: 'Dashboard' },
  { href: '/training', label: 'Training' },
  { href: '/nutrition', label: 'Nutrition' },
  { href: '/check', label: 'Check' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-950 text-gray-100 min-h-screen">
        <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4">
          <div className="max-w-5xl mx-auto flex items-center gap-8">
            <span className="text-white font-bold text-lg tracking-wide">JR</span>
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
        <main className="max-w-5xl mx-auto px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  )
}
