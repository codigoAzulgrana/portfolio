'use client'
import React, { useState } from 'react'
import { NavItem } from '../atoms/NavItem';
import { Button } from '../atoms/Button';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navThemes = {
        sanLorenzoAzul: 'hover:text-white hover:bg-blue-900',
        sanLorenzoRojo: 'hover:text-white hover:bg-red-600'
    } as const;

    type NavTheme = keyof typeof navThemes;

    const navItems: { href: string; label: string; theme: NavTheme }[] = [
        { href: '/', label: 'Inicio', theme: 'sanLorenzoRojo' },
        { href: '/', label: 'Sobre Mi', theme: 'sanLorenzoAzul' },
        { href: '/', label: 'Proyectos', theme: 'sanLorenzoRojo' },
        { href: '/', label: 'Contacto', theme: 'sanLorenzoAzul' }
    ]



    return (
        <nav className='absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 text-black'>
            <NavItem url='/' label='Desarrollador Full Stack' claseNameNavItem='text-xl font-bold' />

            {/** Navegando desde el ordenador */}
            <div className='hidden md:flex items-center gap-6'>
                {navItems.map((item) => (
                    <NavItem
                        key={item.label}
                        label={item.label}
                        url={item.href}
                        claseNameNavItem={`px-4 py-2 rounded-full ${navThemes[item.theme]} transition-colors duration-200 text-2xl`}
                    />
                ))}
            </div>

            {/**Navegando desde dispositivo movil */}

            {/** Botón de menú para desplegar en navegación móvil */}
            <Button
                claseNameButton='md:hidden z-50'
                action={() => setIsMenuOpen(!isMenuOpen)}
                label='Menu'
                classNameSpan='material-symbols-outlined'
            />

            {/* Menú móvil: siempre renderizado, pero con transiciones */}
            <div
                className={`absolute top-full left-0 right-0 md:hidden transition-all duration-500 ease-in-out ${isMenuOpen
                    ? 'opacity-100 visible pointer-events-auto'
                    : 'opacity-0 invisible pointer-events-none'
                    }`}
            >
                <div className="bg-black/90 backdrop-blur-sm">
                    <div className="flex flex-col p-4 space-y-4">
                        {navItems.map((item) => (
                            <NavItem
                                key={item.label}
                                label={item.label}
                                url={item.href}
                                action={() => setIsMenuOpen(false)}
                                claseNameNavItem={`text-center px-4 py-2 rounded-full text-white text-2xl transition-colors duration-200 ${navThemes[item.theme]}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}
