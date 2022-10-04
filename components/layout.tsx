import React, { useState } from 'react'
import { useRouter } from 'next/router'

import Navbar from './Navbar'
import Footer from './Footer'
import Section from './Section'
import GoBack from './GoBack'

export default function Layout({ children }: any) {
    
    const router = useRouter()
    
    const [openMobileNavbar, setOpenMobileNavbar] = useState(false)

    const renderGoBack = () => {
        if (!(router.pathname == '/' || router.pathname == '/projects')) {
            return (
                <Section color='light-gray' paddingBottom='pb-6' paddingTop='pt-6'>
                    <GoBack />
                </Section>
            )
        }    
    }
    
    return (
        <div className={`Layout ${openMobileNavbar ? 'overflow-hidden h-screen' : ''}`}>
            <Navbar 
                openMobileNavbar={openMobileNavbar}
                setOpenMobileNavbar={setOpenMobileNavbar} 
            />
            <main className='content min-h-custom'>
                <div className='md:hidden'>
                    { renderGoBack() }
                </div>
                { children }
            </main>
            <Footer />
        </div>
    )
}