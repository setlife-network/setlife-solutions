import { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next';

import Headline from './Headline'

import { validEmail, validNumber } from '../utilities/validations'

import {
    THIS_PROJECT_IS_FOR,
    OTHER,
    EMAIL,
    NAME,
    PHONE_NUMBER,
    MYSELF,
    MY_OWN_STARTUP_SMALL_BUSINESS,
    CORPORATION,
    NON_PROFIT_ORGANIZATION,
    PUBLIC_GOVERNMENT_AGENCY,
    INVALID,
    PLEASE_SELECT_AT_LEAST_ONE_OPTION
} from '../constants/strings'

interface ContactInformationProps {
    setContactInformation: any,
    setContactInformationError: any
}

const ContactInformation = ({
    setContactInformation,
    setContactInformationError
}: ContactInformationProps) => {

    const { t } = useTranslation('consultation')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [clientType, setClientType] = useState('')
    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [clientTypeError, setClientTypeError] = useState(false)

    useEffect(() => {
        setContactInformation({
            name,
            email,
            phoneNumber, 
            clientType
        })

        if (
            email && 
            name && 
            clientType
        ) {
            setContactInformationError(
                nameError || 
                emailError ||
                clientTypeError
            )
        } else {
            setContactInformationError(true)
        }
    }, [name, email, phoneNumber, clientType])

    const renderInputs = () => {
        const basicInformationFields = [
            {
                name: t(NAME),
                value: name,
                error: nameError,
                onChange: (nameInput: any) => {
                    setName(nameInput)
                    setNameError(!nameInput)
                }
            },
            {
                name: t(EMAIL, { 'ns': 'common' }),
                value: email,
                error: emailError,
                onChange: (emailInput: any) => {
                    setEmail(emailInput)
                    setEmailError(!validEmail.exec(emailInput))
                }
            },
            {
                name: t(PHONE_NUMBER),
                value: phoneNumber,
                onChange: (phoneNumberInput: any) => {
                    setPhoneNumber(validNumber.exec(phoneNumberInput)
                        ? phoneNumberInput
                        : ''
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
                            <span className={`${input.name == PHONE_NUMBER ? 'hidden' : 'inline'}`}>*</span>
                        </span>
                    </label>
                    {input.error && (
                        <span className='px-5 text-red-600'>
                            { t(INVALID) } { input.name }
                        </span> 
                    )}
                </div>
                
            )
        })
    }

    const renderClientTypes = () => {
        const handleClientTypeChange = (name: any) => {
            setClientType(name)
            setClientTypeError(false)
        }
        const clientTypes = [
            {
                name: MYSELF,
            },
            {
                name: MY_OWN_STARTUP_SMALL_BUSINESS,
            },
            {
                name: CORPORATION,
            },
            {
                name: NON_PROFIT_ORGANIZATION,
            },
            {
                name: PUBLIC_GOVERNMENT_AGENCY,
            },
            {
                name: OTHER,
            },
        ]
        return clientTypes.map(client => {
            return (
                <div 
                    className='w-fit'
                    onClick={() => handleClientTypeChange(client.name)}
                >
                    <label 
                        className='form-check-label inline-block text-solid-black' 
                        htmlFor='clientType'
                        key={client.name}
                    >
                        <input 
                            className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' 
                            type='radio' 
                            name='clientType' 
                            id={client.name} 
                            checked={clientType == client.name}
                            onChange={() => {}}
                        />
                        { t(client.name) }
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
                    {t(THIS_PROJECT_IS_FOR) + '*'}
                </Headline>
                { renderClientTypes() }
                {clientTypeError && (
                    <span className='px-5 text-red-600'>
                        { t(PLEASE_SELECT_AT_LEAST_ONE_OPTION) }
                    </span>
                )}
            </div>
        </div>
    )
}

export default ContactInformation