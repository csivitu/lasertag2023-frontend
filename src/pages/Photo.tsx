import React from 'react'
import 'tailwindcss/tailwind.css'
import { Tektur} from 'next/font/google'
const tektur = Tektur({subsets:['latin']})

export default function Photo() {
  return (
    <div className = {`bg-black text-white ${tektur.className} flex flex-col align-center justify-center`}>
        <div>
            <p className = "text-center text-4xl">A Thrilling Multiplayer Shooting Experience</p><br/>
            <p className = " text-center text-xl">Laser Tag offers you a chance to step onto the arena for a thrilling multi-player experience.</p>
            <p className = " text-center text-xl">Don your vests and have your guns at the ready, maximize hits to climb up the leaderboard!</p>
        </div>
        <div>
            Carousel here
        </div>
    </div>
  )
}

