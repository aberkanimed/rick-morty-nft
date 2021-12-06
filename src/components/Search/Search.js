import React from 'react'

const Search = ({ setSearch, setPageNumber }) => {
    return (
        <div className="mb-5 flex flex-col sm:flex-row">
            <div className="flex-grow mb-2 sm:mr-4">
                <label htmlFor="search" className="sr-only">
                    Email
                </label>
                <input
                    onChange={(e) => { setPageNumber(1); setSearch(e.target.value) }}
                    type="text"
                    name="search"
                    id="search"
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="search for a character"
                />
            </div>
            <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                Search
            </button>
        </div>
    )
}

export default Search
