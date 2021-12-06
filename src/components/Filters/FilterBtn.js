import React from 'react'

const FilterBtn = ({ category, index, item, onToggleFilters, task, setPageNumber }) => {
    return (
        <div>
            <div className="grid grid-cols-1 gap-1">
                <div
                    className={`
                        'cursor-pointer focus:outline-none border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
                        ${item.checked ? 'bg-indigo-600 border-transparent text-white hover:bg-indigo-700' : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50'}`}
                        onClick={() => {
                            onToggleFilters(item.label);
                            setPageNumber(1);
                            task(item.value);
                        }}>
                    <input
                        type="radio"
                        id={`${category}-${index}`}
                        name={category}
                        className="sr-only"/>
                    <label> {item.label} </label>
                </div>
            </div>
        </div>
    )
}

export default FilterBtn
