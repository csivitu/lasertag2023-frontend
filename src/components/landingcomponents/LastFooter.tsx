import React from 'react'
import 'tailwindcss/tailwind.css'
import Image from 'next/image'
import { Tektur } from 'next/font/google'

const tektur = Tektur({ subsets: ['latin'] })

export default function LastFooter() {
  return (
    <footer className={`relative ${tektur.className}`}>
      <div className="mt-8">
        <Image src="/landingassests/Footer.svg" alt="footervector" width={100} height={100} className="w-full absolute bottom-0" />
      </div>
    </footer>
  )
}
