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
    <nav className="bg-[#07090f] border-b border-[#1c2e4a] px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex items-center h-14 gap-6 sm:gap-8">
        <span className="text-yellow-400 font-bold text-base tracking-widest shrink-0 uppercase">JR</span>
        <div className="flex items-center gap-1 overflow-x-auto">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-all duration-200
                  ${active
                    ? 'text-yellow-400'
                    : 'text-[#8892a4] hover:text-[#e8eaf0]'
                  }
                `}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-3 right-3 h-px bg-yellow-400 rounded-full" />
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
