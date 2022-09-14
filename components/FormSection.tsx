import { useState, useRef } from 'react'

import ChevronIcon from './ChevronIcon'
import Section from './Section'
import Subtitle from './Subtitle'

interface FormSectionProps {
    title: string,
    children: any
}

const FormSection = ({
    title,
    children
}: FormSectionProps) => {

    const [setActive, setActiveState] = useState('')
    const [setHeight, setHeightState] = useState('0px')
    const [setRotate, setRotateState] = useState('icon')

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === '' ? 'active' : '')
        setHeightState(
            setActive === 'active' ? '0px' : `1500px`
        )
        setRotateState(
            setActive === 'active' ? 'icon' : 'icon rotate'
        )
    }
    
    return (
        <div className='FormSection'>
            <button className={`accordion ${setActive}`} type='button' onClick={toggleAccordion}>
                <Section color='light-gray'>
                    <div className='grid grid-cols-2'>
                        <div className='grid grid-cols-1 w-fit gap-2'>
                            <Subtitle variant='s'>
                                { title }
                            </Subtitle>
                            <div className='h-2 bg-primary' />
                        </div>
                        <div>
                            <ChevronIcon className={`${setRotate}`} width={10} fill='#777' />
                        </div>
                    </div>
                </Section>
            </button>
            <Section paddingBottom='' paddingTop=''>
                <div style={{ maxHeight: `${setHeight}` }} className='content'>
                    <div className='py-12'>
                        { children }                
                    </div>  
                </div>
            </Section>
        </div>
    )
}

export default FormSection