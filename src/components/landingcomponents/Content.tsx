import React from 'react'
import { Tektur } from 'next/font/google'
const tektur = Tektur({ subsets: ['latin'] })

const Content = () => {
  return (
    <div className="bg-content h-screen w-full bg-cover bg-no-repeat overflow-hidden flex flex-col justify-center">
        <div className={`  ${tektur.className} text-[#FFF6E8] font-medium lg:text-6xl text-3xl text-center tracking-widest px-[2vw]`}>
          A Thrilling Multiplayer Shooting Experience{" "}
        </div>

        <div className={` ${tektur.className} text-[#FFF6E8] font-normal lg:text-3xl mt-[2vh] text-xl text-center px-[3vw]`}>
          Laser Tag offers you a chance to step onto the arena for a thrilling
          multi-player experience. <br />
          Don your vests and have your guns at the ready, maximize hits to climb
          up the leaderboard!
        </div>
      </div>
  )
}

export default Content
