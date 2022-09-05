import { useEffect, useState } from 'react'

import Headline from './Headline'

import { validEmail, validNumber } from '../constants/regex'

import {
    CLIENT_TYPE,
    EMAIL,
    NAME,
    PHONE_NUMBER,
    INDIVIDUAL,
    STARTUP_SMALL_BUSINESS,
    CORPORATION,
    NON_PROFIT_MUNICIPAL,
    INVALID
} from '../constants/strings'

interface ContactInformationProps {
    setContactInformation: any
}

const ContactInformation = ({
    setContactInformation
}: ContactInformationProps) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [clientType, setClientType] = useState('')
    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [phoneNumberError, setPhoneNumberError] = useState(false)
    const [clientTypeError, setClientTypeError] = useState(false)

    useEffect(() => {
        setContactInformation({
            name,
            email,
            phoneNumber, 
            clientType
        })
    }, [name, email, phoneNumber, clientType])

    const renderInputs = () => {
        const basicInformationFields = [
            {
                name: NAME,
                value: name,
                error: nameError,
                onChange: (nameInput: any) => {
                    setName(nameInput)
                    setNameError(nameInput
                        ? false
                        : true
                    )
                }
            },
            {
                name: EMAIL,
                value: email,
                error: emailError,
                onChange: (emailInput: any) => {
                    setEmail(emailInput)
                    setEmailError(validEmail.exec(emailInput)
                        ? false
                        : true
                    )
                }
            },
            {
                name: PHONE_NUMBER,
                value: phoneNumber,
                error: phoneNumberError,
                onChange: (phoneNumberInput: any) => {
                    setPhoneNumber(validNumber.exec(phoneNumberInput)
                        ? phoneNumberInput
                        : ''
                    )
                    setPhoneNumberError(phoneNumberInput
                        ? false
                        : true    
                    )
                } 
            }
        ]
        return basicInformationFields.map(input => {
            return (
                <div>
                    <label 
                        className={`relative block p-3 border-2 rounded-full ${input.error ? 'border-red-600' : 'border-primary'}`}
                        htmlFor={input.name} 
                        key={input.name}
                    >
                        <input
                            className='w-full px-4 pt-3.5 pb-0 text-sm placeholder-transparent border-none focus:ring-0 peer'
                            id={input.name}
                            type='text'
                            placeholder={input.name}
                            required
                            value={input.value}
                            onChange={(e) => input.onChange(e.target.value)}
                        />
                        <span className='absolute text-xs px-4 font-medium text-gray-500 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm'>
                            { input.name }
                        </span>
                    </label>
                    { input.error && <span className='px-5 text-red-600'>{ INVALID } { input.name }</span> }
                </div>
                
            )
        })
    }

    const renderClientTypes = () => {
        const clientTypes = [
            {
                name: INDIVIDUAL,
            },
            {
                name: STARTUP_SMALL_BUSINESS
            },
            {
                name: CORPORATION
            },
            {
                name: NON_PROFIT_MUNICIPAL
            }
        ]
        return clientTypes.map(client => {
            return (
                <div>
                    <label 
                        className='form-check-label inline-block text-solid-black' 
                        htmlFor='flexRadioDefault1'
                        key={client.name}
                    >
                        <input 
                            className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' 
                            type='radio' 
                            name='flexRadioDefault' 
                            id={client.name} 
                            onChange={() => setClientType(client.name)}
                        />
                        { client.name }
                    </label>
                </div>
            )
        })
    }

    return (
        <div className='ContactInformation'>
            <div className='grid grid-flow-row auto-rows-max gap-8 w-full md:w-6/12'>
                { renderInputs() }
            </div>
            <div className='grid grid-flow-row auto-rows-max gap-8 w-full md:w-6/12 mt-8'>
                <Headline 
                    color='primary'
                    variant='alternative'
                >
                    {CLIENT_TYPE}
                </Headline>
                { renderClientTypes() }
            </div>
        </div>
    )
}

export default ContactInformation