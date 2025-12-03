import Link from 'next/link'
import React from 'react'

interface navItemProps {
    label: string,
    url:string,
    claseNameNavItem:string,
    action?: () => void
}

export const NavItem = ({label, url, claseNameNavItem, action}: navItemProps) => {
  return (
    <Link
    href={url}
    className={claseNameNavItem}
    onClick={action}
    >
    {label}
    </Link>
  )
}
