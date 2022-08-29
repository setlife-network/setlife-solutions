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

    const renderInputs = () => {
        const basicInformationFields = [
            {
                name: NAME,
                onChange: setName
            },
            {
                name: EMAIL,
                onChange: setEmail
            },
            {
                name: PHONE_NUMBER,
                onChange: setPhoneNumber
            }
        ]
        return basicInformationFields.map(input => {
            return (
                <label 
                    className='relative block p-3 border-2 border-primary rounded-full' 
                    htmlFor='name' 
                    key={input.name}
                >
                    <input
                        className='w-full px-4 pt-3.5 pb-0 text-sm placeholder-transparent border-none focus:ring-0 peer'
                        id={input.name}
                        type='text'
                        placeholder={input.name}
                        onChange={(e) => input.onChange(e.target.value)}
                    />
                    <span className='absolute text-xs px-4 font-medium text-gray-500 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm'>
                        { input.name }
                    </span>
                </label>
            )
        })
    }

    return (
        <div className='ContactInformation'>
            <div className='grid grid-flow-row auto-rows-max gap-8 w-full md:w-6/12'>
                { renderInputs() }
            </div>
        </div>
    )
}

export default ContactInformation