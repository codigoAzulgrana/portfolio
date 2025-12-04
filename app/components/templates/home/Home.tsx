import React from 'react'
import { HeroSection } from '../../organisms/HeroSection'

export const Home = () => {
  return (
    <main className="grow flex items-center justify-center">
      <div className="w-full @container">
        <div className="p-4">
          <HeroSection />
        </div>
      </div>
    </main>
  )
}
