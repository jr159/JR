'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Dashboard' },
  { href: '/training', label: 'Training' },
  { href: '/nutrition', label: 'Nutrition' },
  { href: '/check', label: 'Check' },
  { href: '/projection', label: 'Projection' },
  { href: '/health', label: 'Health' },
]

export default function NavBar() {
  const pathname = usePathname()

  return (
    <nav className="bg-[#07090f]/95 backdrop-blur-sm border-b border-[#1c2e4a] px-4 sm:px-6 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center h-16 gap-4">

        <span className="text-yellow-400 font-black text-sm tracking-[0.25em] shrink-0 uppercase select-none">
          JR
        </span>

        <div className="w-px h-5 bg-[#1c2e4a] shrink-0" />

        <div className="flex items-center gap-1 overflow-x-auto scrollbar-none">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  px-3 py-1.5 rounded-xl text-sm font-medium whitespace-nowrap
                  transition-all duration-150 border
                  ${active
                    ? 'bg-yellow-400/10 text-yellow-400 border-yellow-400/25 font-semibold'
                    : 'text-[#8892a4] border-transparent hover:text-[#c8cdd6] hover:bg-[#0d1526] hover:border-[#1c2e4a]'
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
