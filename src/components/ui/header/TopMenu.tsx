import Link from 'next/link'
import React from 'react'
import { TopMenuItems } from './TopMenuItems'

const menuItems = [
    {
        title: 'Inicio',
        path: '/'
    },
    {
        title: 'Animes',
        path: '/animes'
    },
    {
        title: 'blog',
        path: '/blog'
    },
]

export const TopMenu = () => {
    return (
        <header className='bg-transparent relative'>
            <nav className='flex justify-between align-middle items-center px-10 py-3'>
                <div className='logo text-white'>
                    Soy el logo
                </div>
                <ul className='flex flex-row gap-10  text-center'>

                    {
                        menuItems.map(item => (
                            <TopMenuItems key={item.path} {...item} />
                        ))
                    }

                </ul>
            </nav>
        </header>
    )
}
