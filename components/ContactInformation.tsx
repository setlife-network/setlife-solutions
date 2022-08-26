import { useEffect, useState } from 'react'

import {
    EMAIL,
    NAME,
    PHONE_NUMBER
} from '../constants/strings'

interface contactInformationProps {
    setContactInformation: any
}

const ContactInformation = ({
    setContactInformation
}: contactInformationProps) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    useEffect(() => {
        setContactInformation({
            name,
            email,
            phoneNumber
        })
    }, [name, email, phoneNumber])

    return (
        <div className='ContactInformation'>
            <div className='grid grid-flow-row auto-rows-max gap-8 w-full md:w-6/12'>
                <label className='relative block p-3 border-2 border-primary rounded-full' htmlFor='name'>
                    <input
                        className='w-full px-4 pt-3.5 pb-0 text-sm placeholder-transparent border-none focus:ring-0 peer'
                        id='name'
                        type='text'
                        placeholder={NAME}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <span className='absolute text-xs px-4 font-medium text-gray-500 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm'>
                        {NAME}
                    </span>
                </label>
                <label className='relative block p-3 border-2 border-primary rounded-full' htmlFor='name'>
                    <input
                        className='w-full px-4 pt-3.5 pb-0 text-sm placeholder-transparent border-none focus:ring-0 peer'
                        id='email'
                        type='text'
                        placeholder={EMAIL}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className='absolute text-xs px-4 font-medium text-gray-500 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm'>
                        {EMAIL}
                    </span>
                </label>
                <label className='relative block p-3 border-2 border-primary rounded-full' htmlFor='name'>
                    <input
                        className='w-full px-4 pt-3.5 pb-0 text-sm placeholder-transparent border-none focus:ring-0 peer'
                        id='Phone number'
                        type='text'
                        placeholder={PHONE_NUMBER}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <span className='absolute text-xs px-4 font-medium text-gray-500 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm'>
                        {PHONE_NUMBER}
                    </span>
                </label>
            </div>
        </div>
    )
}

export default ContactInformation