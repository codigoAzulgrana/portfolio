import React from 'react'
import './style.css'

interface HeroContentProps {
    name: string,
    developer:string,
    description: string
}


export const HeroContent = ({name,description,developer}: HeroContentProps) => {
  return (
   <div className="flex flex-col gap-4">
  <h1 className="text-title-casla-1 text-5xl  leading-tight tracking-[-0.033em] @[480px]:text-7xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
    {name}
  </h1>
  <h1 className="text-title-casla-2 text-5xl  leading-tight tracking-[-0.033em] @[480px]:text-7xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
    {developer}
  </h1>
  <h2 className="text-descripcion-casla text-xl font-normal leading-normal @[480px]:text-xl @[480px]:font-normal @[480px]:leading-normal">
    {description}
  </h2>
</div>
  )
}
