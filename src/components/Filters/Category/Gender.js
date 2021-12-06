import React from 'react'
import { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid'
import FilterBtn from '../FilterBtn'

const Gender = ({ setGender, setPageNumber }) => {
    const [genderFilters, setGenderFilters] = useState([
        { value: 'female', label: 'Female', checked: false },
        { value: 'male', label: 'Male', checked: false },
        { value: 'genderless', label: 'Genderless', checked: false },
        { value: 'unknown', label: 'Unknown', checked: false }
    ]);

    const toggleGenderFilters = (name) => {
        setGenderFilters(genderFilters.map((item) => item.label === name ? { ...item, checked: !item.checked } : { ...item, checked: false }))
    }

    return (
        <Disclosure as="div" className="border-b border-gray-200 py-6">
            {({ open }) => (
                <>
                    <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-base text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-700">
                                Gender
                            </span>
                            <span className="ml-6 flex items-center">
                                {open ? (
                                    <MinusSmIcon className="h-5 w-5" aria-hidden="true"/>
                                ) : (
                                    <PlusSmIcon className="h-5 w-5" aria-hidden="true"/>
                                )}
                            </span>
                        </Disclosure.Button>
                    </h3>
                    <Disclosure.Panel className="pt-6">
                    <div className="space-y-4">
                        {genderFilters.map((item, index) => (
                            <FilterBtn
                                key={index}
                                category="gender"
                                index={index}
                                item={item}
                                onToggleFilters={toggleGenderFilters}
                                task={setGender}
                                setPageNumber={setPageNumber}/>
                        ))}
                    </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Gender
