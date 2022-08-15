import React, { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

import { 
    US_ICON, 
    ES_ICON,
} from '../constants';

const LanguageButton = ({}) => {

    const [active, setActive] = useState(null)

    return (
        <Menu as='div' className='relative inline-block'>
            <div>
                <Menu.Button className='inline-flex justify-center w-full rounded px-4 py-2 bg-primary'>
                    <img 
                        src={US_ICON}
                        alt='Icon'
                    />
                    <ChevronDownIcon className='-mr-1 ml-2 h-5 w-5 text-solid-white' />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-left absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Button className='block px-4 py-2 text-sm'>
                            <img 
                                src={US_ICON}
                                alt='US_icon'
                                className='inline'
                            />
                            English
                        </Menu.Button>
                        <Menu.Button className='block px-4 py-2 text-sm'>
                            <img 
                                src={ES_ICON}
                                alt='ES_icon'
                                className='inline'
                            />
                            Spanish
                        </Menu.Button>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default LanguageButton
