import React, {useState, useEffect} from 'react'
import Cards from '../components/Cards/Cards';
import SelectMenu from '../components/Filters/Category/SelectMenu';

const Locations = () => {
    let [id, setId] = useState(1);
    let [info, setInfo] = useState([]);
    let [results, setResults] = useState([]);
    let {type, dimension, name} = info;

    let api = `https://rickandmortyapi.com/api/location/${id}`;
    useEffect(() => {
        (async function() {
            let data = await fetch(api).then((res) => res.json());
            setInfo(data);

            let residents = await Promise.all(
                data.residents.map((residentUrl) => {
                    return fetch(residentUrl).then((res) => res.json());
                })
            );

            setResults(residents);
        })()
    }, [api])
    return (
        <div>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-8">
        <div className='text-center'>
            <h2 className="text-3xl lg:text-4xl text-gray-700 font-semibold">Location: <span className='text-blue-500'>{name === '' ? 'Unknown' : name}</span> </h2>
            <h3 className='mt-2 text-base lg:text-base text-gray-700 flex flex-col'>
                <span>Type: {type === '' ? 'Unknown' : type}</span>
                <span>Dimension: {dimension === '' ? 'Unknown' : dimension}</span>
            </h3>
        </div>
        <div className="grid grid-cols-12 gap-4 mt-6">
            <div className="col-start-3 col-span-8 text-center lg:col-start-1 lg:col-span-3">
                <label htmlFor="location" className="block text-lg font-semibold text-gray-700">Pick Location</label>
                <SelectMenu name="Location" setId={setId} total={126}/>
            </div>
            <div className="col-start-3 col-span-8 lg:col-start-4">
                <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Cards results={results}/>
                </ul>
            </div>
        </div>
      </div>
    </div>
    )
}

export default Locations
