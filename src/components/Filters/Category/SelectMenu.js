import React from "react";

const SelectMenu = ({ total, name, setId }) => {
    return (
        <div>
            <select
                onChange={(e) => setId(e.target.value)}
                id={name}
                name="episode"
                className="mt-4 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
                {[...Array(total).keys()].map((num) => {
                    return <option key={num} value={num+1}>{name} - {num+1}</option>
                })}
            </select>
        </div>
    );
};

export default SelectMenu;
