'use client'

import Link from 'next/link'
import React from 'react'
import { TopMenuItems } from './TopMenuItems'
import { useUIStore } from '@/store'
import Image from 'next/image'

const menuItems = [
    {
        icono: './iconosAnime/goku2.svg',
        title: 'Inicio',
        path: '/'
    },
    {
        icono: './iconosAnime/naruto.svg',
        title: 'Animes',
        path: '/animes'
    },
    {
        icono: './iconosAnime/tanjiro.svg',
        title: 'blog',
        path: '/blog'
    },
]

export const TopMenu = () => {

    const openSideMenu = useUIStore((state) => state.openSideMenu);

    return (
        <header className='bg-gradient-to-r from-gray-800 via-gray-800 to-gray-900 relative'>
            <nav className='flex justify-between sm:justify-evenly align-middle items-center px-5 py-3'>

                <div className='text-white flex '>
                    Soy el logo
                </div>

                <ul className='hidden flex-row gap-5 sm:flex text-center'>

                    {
                        menuItems.map(item => (
                            <TopMenuItems key={item.path} {...item} />
                        ))
                    }

                </ul>

                <div className='hidden text-white  sm:flex'>
                    Registrar
                </div>

                <button
                    onClick={openSideMenu}
                    className="
                    bg-gray-600 rounded-full
                    sm:hidden
                    px-1 py-1 text-white hover:rounded-full  hover:border-solid hover:border-cyan-100 w-[7rem] gap-1 hover:bg-yellow-700  hover:transition-all flex items-center justify-center
                    "
                >
                    <Image
                        src={'./iconosAnime/saitama.svg'}
                        alt={'Submenu'}
                        width={32}
                        height={32}
                    />
                    Menú
                </button>

            </nav>
        </header>
    )
}
