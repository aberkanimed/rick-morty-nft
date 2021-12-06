import React from "react";
import Status from "./Category/Status";
import Species from "./Category/Species";
import Gender from "./Category/Gender";

const Filters = ({ setStatus, setGender, setSpecies, setPageNumber }) => {
    let clearFilters = () => {
        setStatus("");
        setGender("");
        setSpecies("");
        setPageNumber("");
        window.location.reload(false);
    };
    return (
        <div className="flex flex-col items-center">
            <h2 className="mb-2 text-center text-xl font-semibold text-gray-700" id="filters-heading">
                Filters
            </h2>
            <div onClick={clearFilters} className="mb-2 text-sm text-blue-500 cursor-pointer underline">Clear Filters</div>
            <div className="w-full bg-white rounded-lg shadow divide-y divide-gray-200">
                <div>
                    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <section aria-labelledby="filters-heading" className="pt-6 pb-24">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-10">
                                {/* Filters */}
                                <form className="hidden lg:block">
                                    <h3 className="sr-only">Filters</h3>
                                    <Status setStatus={setStatus} setPageNumber={setPageNumber}/>
                                    <Species setSpecies={setSpecies} setPageNumber={setPageNumber}/>
                                    <Gender setGender={setGender} setPageNumber={setPageNumber}/>
                                </form>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Filters;
