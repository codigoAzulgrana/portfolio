import React from 'react'
import { HeroContent } from '../molecules/hero-section/HeroContent'
import { CallToActionButtons } from '../molecules/hero-section/CallToActionButtons'

export const HeroSection = () => {
    return (
        <div className="flex min-h-[60vh] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 items-center justify-center p-4 text-center">
            <HeroContent name='NAHUEL ALBERTO CACHAMBI'
            developer='Desarrollador Full Stack'
                description='Construyendo experiencias web modernas con pasión y precisión.' />
            <CallToActionButtons />
        </div>
    )
}
