import React from "react";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import { Tektur } from "next/font/google";
const tektur = Tektur({ subsets: ["latin"] });

export default function LastFooter() {
  return (
    <div className="relative bg-black flex flex-col justify-between min-h-screen">
      <div className="flex flex-col items-center">
        <div className="px-auto py-14 flex-grow">
          <footer className="absolute bottom-0 left-0 w-full">
            <div className="w-full relative">
              <Image src="/landingassests/Footer.svg" alt="footervector" width={1920} height={10} className="w-full" />
              <div className="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <Image src="/landingassests/Logoname.svg" alt="CSI" width={300} height={100} />
              </div>
              <div className="flex flex-row items-center absolute top-40 left-20 transform -translate-y-1/2 mr-4">
                <p className={`text-center ${tektur.className}`} style={{ fontSize: '32px', fontWeight: 700, lineHeight: '150%', letterSpacing: '1.28px', color: 'var(--rich-black, #040804)' }}>FOLLOW US</p>
              </div>
              <div className="flex flex-col items-center absolute top-60 right-60 transform -translate-y-1/2">
                <div className="mb-2">
                  <p className={`text-center ${tektur.className}`} style={{ fontSize: '32px', fontWeight: 700, lineHeight: '150%', letterSpacing: '1.28px', color: 'var(--rich-black, #040804)' }}>VISIT</p>
                </div>
                <div className="mb-2">
                  <p className={`text-center ${tektur.className}`} style={{ fontSize: '22px', fontWeight: 600, lineHeight: '150%', letterSpacing: '0.88px', color: 'var(--rich-black, #040804)' }}>CSI WEBSITE</p>
                </div>
                <div className="mb-2">
                  <p className={`text-center ${tektur.className}`} style={{ fontSize: '22px', fontWeight: 600, lineHeight: '150%', letterSpacing: '0.88px', color: 'var(--rich-black, #040804)' }}>GALLERY</p>
                </div>
                <div className="mb-2">
                  <p className={`text-center ${tektur.className}`} style={{ fontSize: '22px', fontWeight: 600, lineHeight: '150%', letterSpacing: '0.88px', color: 'var(--rich-black, #040804)' }}>GUIDE</p>
                </div>
                <div className="mb-2">
                  <p className={`text-center ${tektur.className}`} style={{ fontSize: '22px', fontWeight: 600, lineHeight: '150%', letterSpacing: '0.88px', color: 'var(--rich-black, #040804)' }}>FAQs</p>
                </div>
              </div>

              <div className="flex flex-row items-center absolute top-60 left-20 transform -translate-y-1/2">

                <a href="https://www.instagram.com/csivitu/" target="_blank" rel="noopener noreferrer" className="mr-8">
                  <Image src="/landingassests/instagram.svg" alt="Instagram" width={38} height={38} />
                </a>

                <a href="https://www.youtube.com/user/csivitu" target="_blank" rel="noopener noreferrer" className="mr-8">
                  <Image src="/landingassests/youtube.svg" alt="YouTube" width={38} height={38} />
                </a>

                <a href="https://twitter.com/csivitu" target="_blank" rel="noopener noreferrer" className="mr-8">
                  <Image src="/landingassests/x.svg" alt="X" width={38} height={38} />
                </a>
              </div>
              <div className="flex flex-row items-center absolute top-60 left-20 transform -translate-y-1/2 mt-16">

                <a href="https://www.linkedin.com/company/csivitu" target="_blank" rel="noopener noreferrer" className="mr-8">
                  <Image src="/landingassests/linkedin.svg" alt="LinkedIn" width={38} height={38} />
                </a>

                <a href="https://github.com/csivitu/" target="_blank" rel="noopener noreferrer" className="mr-8">
                  <Image src="/landingassests/github.svg" alt="GitHub" width={38} height={38} />
                </a>

                <a href="https://www.threads.net/@csivitu" target="_blank" rel="noopener noreferrer" className="mr-8">
                  <Image src="/landingassests/threads.svg" alt="Threads" width={38} height={38} />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
