import { useState } from 'react'

import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }: any) {

    const [openMobileNavbar, setOpenMobileNavbar] = useState(false)

    return (
        <div className={`Layout ${openMobileNavbar ? 'overflow-hidden h-screen' : ''}`}>
            <Navbar 
                openMobileNavbar={openMobileNavbar}
                setOpenMobileNavbar={setOpenMobileNavbar} 
            />
            <main className='content min-h-custom'>
                { children }
            </main>
            <Footer />
        </div>
    )
}