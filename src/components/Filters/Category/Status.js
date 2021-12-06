import React from 'react'
import { Disclosure } from '@headlessui/react'
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid'
import FilterBtn from '../FilterBtn'
import { useState } from 'react/cjs/react.development'

const Status = ({ setStatus, setPageNumber }) => {
    const [statusFilters, setStatusFilters] = useState([
        { value: 'alive', label: 'Alive', checked: false },
        { value: 'dead', label: 'Dead', checked: false },
        { value: 'unknown', label: 'Unknown', checked: false }
    ]);

    const toggleStatusFilters = (name) => {
        setStatusFilters(statusFilters.map((item) => item.label === name ? { ...item, checked: !item.checked } : { ...item, checked: false }))
    }

    return (
        <Disclosure as="div" className="border-b border-gray-200 py-6">
            {({ open }) => (
                <>
                    <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-base text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-700">
                                Status
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
                            {statusFilters.map((item, index) => (
                                <FilterBtn
                                    key={index}
                                    category="status"
                                    index={index}
                                    item={item}
                                    onToggleFilters={toggleStatusFilters}
                                    task={setStatus}
                                    setPageNumber={setPageNumber} />
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Status
