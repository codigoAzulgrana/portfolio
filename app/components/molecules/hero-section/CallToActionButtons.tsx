import React from 'react'
import { NavItem } from '../../atoms/NavItem'

export const CallToActionButtons = () => {
    const navItems = [
        {url: '/', label:"Ver Proyecto"},
        {url: '/', label: "Contacto"}
    ]
  return (
    <div className="flex-wrap gap-4 flex justify-center mt-4">


    {
        navItems.map((item) => (
            <NavItem  
            key={item.label}
            label={item.label}
            url={item.url}
            claseNameNavItem="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-casla-white text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105"
            />
        ))}
</div>
  )
}
