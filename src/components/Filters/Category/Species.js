import React from 'react'
import { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid'
import FilterBtn from '../FilterBtn'

const Species = ({ setSpecies, setPageNumber }) => {
    const [speciesFilters, setSpeciesFilters] = useState([
        { value: "human", label: "Human", checked: false },
        { value: "alien", label: "Alien", checked: false },
        { value: "humanoid", label: "Humanoid", checked: false },
        { value: "poopybutthole", label: "Poopybutthole", checked: false },
        { value: "mythological", label: "Mythological", checked: false },
        { value: "unknown", label: "Unknown", checked: false },
        { value: "animal", label: "Animal", checked: false },
        { value: "disease", label: "Disease", checked: false },
        { value: "robot", label: "Robot", checked: false },
        { value: "cronenberg", label: "Cronenberg", checked: false },
        { value: "planet", label: "Planet", checked: false }
      ]);

    const toggleSpeciesFilters = (name) => {
        setSpeciesFilters(speciesFilters.map((item) => item.label === name ? { ...item, checked: !item.checked } : { ...item, checked: false }))
    }

    return (
        <Disclosure as="div" className="border-b border-gray-200 py-6">
            {({ open }) => (
                <>
                    <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-base text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-700">
                                Species
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
                        {speciesFilters.map((item, index) => (
                            <FilterBtn
                                key={index}
                                category="species"
                                index={index}
                                item={item}
                                onToggleFilters={toggleSpeciesFilters}
                                task={setSpecies}
                                setPageNumber={setPageNumber}/>
                        ))}
                    </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Species
