'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Dashboard' },
  { href: '/training', label: 'Training' },
  { href: '/nutrition', label: 'Nutrition' },
  { href: '/check', label: 'Check' },
]

export default function NavBar() {
  const pathname = usePathname()

  return (
    <nav className="bg-gray-900 border-b border-gray-800 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex items-center h-14 gap-6 sm:gap-8">
        <span className="text-white font-bold text-base tracking-wide shrink-0">JR</span>
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-none">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors
                  ${active
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }
                `}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
