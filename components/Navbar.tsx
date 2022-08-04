import { useState } from 'react'

import { LOGO_URL } from '../constants'

function NavLink({to, children}: any) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}: any) {
    return (
        <div className={`absolute top-0 bg-solid-white left-0 h-screen w-screen transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-solid-black h-20">
                <a href="/">
                    <img 
                        src={LOGO_URL}
                        alt='Logo'
                    />
                </a>
            </div>
            <div className="flex flex-col ml-4">
                <a className="text-2xl font-bold my-4 text-primary" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    About
                </a>
                <a className="text-2xl font-bold my-4 text-primary" href="/services" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Services
                </a>
                <a className="text-2xl font-bold my-4 text-primary" href="/conssultation" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Consultation
                </a>
                <a className="text-2xl font-bold my-4 text-primary" href="/portfolio" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Portfolio
                </a>
                <a className="text-2xl font-bold my-4 text-primary" href="/service-packages" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Service package
                </a>
            </div>  
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md bg-solid-black px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
                <a href="/">
                <img 
                    src={LOGO_URL}
                    alt='Logo'
                />
                </a>
            </div>
            <div className='w-9/12 flex justify-center'>
                <p className='font-semibold text-2xl text-solid-white'>setlife</p><p className='text-2xl font-thin text-primary'>solutions</p>
            </div>
            <div className="w-3/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-0.5 w-full bg-solid-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-0.5 w-full bg-solid-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-0.5 w-full bg-solid-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>
            </div>
        </nav>
    )
}