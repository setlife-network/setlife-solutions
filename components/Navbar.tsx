import { useState } from 'react'

import { LOGO_URL, NAV_ITEMS } from '../constants'
import {
    SETLIFE,
    SOLUTIONS
} from '../constants/strings'

import HamburgerButton from './HamburgerButton'

const renderNavItems = () => {
    return (
        NAV_ITEMS.map((item, idx) => {
            return (
                <a 
                    className='text-2xl font-bold my-4 text-primary md:mx-4 md:text-base md:text-solid-black md:my-0' 
                    href={item.link} 
                    key={idx}
                >
                    {item.name}
                </a>
            )
        })
    )
}

function MobileNav({open, setOpen}: any) {
    return (
        <div 
            className={`
                absolute top-0 bg-solid-white left-0 h-screen w-screen transform ${open ? '-translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out filter drop-shadow-md
            `}
        >
            <div className="flex items-center justify-center filter drop-shadow-md bg-solid-black h-20">
                <a href="/">
                    <img 
                        src={LOGO_URL}
                        alt='Logo'
                    />
                </a>
            </div>
            <div className='flex flex-col ml-4'>
                { renderNavItems() }
            </div>  
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    
    return (
        <nav className='flex filter bg-solid-black px-4 py-4 h-20 items-center md:bg-solid-white'>
            <MobileNav open={open} setOpen={setOpen} />
            <div className='w-3/12 flex md:hidden items-center'>
                <a href='/'>
                    <img 
                        src={LOGO_URL}
                        alt='Logo'
                    />
                </a>
            </div>
            <div className='w-9/12 flex justify-center md:justify-start md:ml-5 md:w-6/12'>
                <a href='/' className='font-semibold text-2xl text-solid-white md:text-solid-black'>{SETLIFE}</a>
                <a href='/' className='text-2xl font-thin text-primary'>{SOLUTIONS}</a>
            </div>
            <div className="w-3/12 flex justify-end items-center md:w-6/12">
                <HamburgerButton 
                    open={open}
                    setOpen={setOpen}
                />
                <div className="hidden md:flex">
                    { renderNavItems() }
                </div>
            </div>
        </nav>
    )
}