import { useRouter } from 'next/router'
import Navbar from './Navbar'
import Footer from './Footer'
import Section from './Section'
import GoBack from './GoBack'

export default function Layout({ children }: any) {

    const router = useRouter()
    
    return (
        <>
            <Navbar />
            {!(router.pathname == '/' || router.pathname == '/projects') &&
                (
                    <Section color='light-gray' paddingBottom='pb-6' paddingTop='pt-6'>
                        <GoBack router={router.pathname} />
                    </Section>
                )
            }
            <main>
                { children }
            </main>
            <Footer />
        </>
    )
}