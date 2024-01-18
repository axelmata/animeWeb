'use client'

import { MainMenu } from '@/interfaces/menu'
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export const TopMenuItems = ({ path, title, icono }:MainMenu) => {

    const currentPath = usePathname();

    return (
        <li className='flex items-center justify-center  bg-gray-600  text-gray-300 rounded-full  hover:transition-all'> 
            <Link href={path} 
                className={`
                    px-2 py-1 text-white hover:rounded-full  hover:border-solid hover:border-cyan-100 w-[7rem] gap-1 hover:bg-yellow-700  hover:transition-all flex items-center justify-center
                ${ currentPath === path ? 'rounded-full bg-yellow-700 text-black ': '' }`}> 
                <Image
                    src={ icono }
                    alt={title}
                    width={32}
                    height={32}
                />
                {title} 
            </Link>
         </li>
    )
}
