'use client'

import { MainMenu } from '@/interfaces/menu'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export const TopMenuItems = ({ path, title }:MainMenu) => {

    const currentPath = usePathname();

    return (
        <li className='flex items-center justify-center'> 
            <Link href={path} 
                className={`
                px-2 py-2  hover:border-solid hover:border-cyan-100 w-[5rem] hover:rounded-full hover:bg-yellow-400 hover:text-black 
                ${ currentPath === path ? 'rounded-full bg-yellow-400 text-black ': '' }`}> 
                {title} 
            </Link>
         </li>
    )
}
