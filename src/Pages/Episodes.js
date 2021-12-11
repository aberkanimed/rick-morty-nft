import React, {useState, useEffect} from 'react'
import Cards from '../components/Cards/Cards';
import SelectMenu from '../components/Filters/Category/SelectMenu';

const Episodes = () => {
    let [id, setId] = useState(1);
    let [info, setInfo] = useState([]);
    let [results, setResults] = useState([]);
    let {air_date, name} = info;

    let api = `https://rickandmortyapi.com/api/episode/${id}`;
    useEffect(() => {
        (async function() {
            let data = await fetch(api).then((res) => res.json());
            setInfo(data);

            let characters = await Promise.all(
                data.characters.map((characterUrl) => {
                    return fetch(characterUrl).then((res) => res.json());
                })
            );

            setResults(characters);
        })()
    }, [api])
    return (
        <div>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-8">
        <div className='text-center'>
            <h2 className="text-3xl lg:text-4xl text-gray-700 font-semibold">Episode: <span className='text-blue-500'>{name === '' ? 'Unknown' : name}</span> </h2>
            <h3 className='mt-2 text-lg text-gray-700'>Air Data {air_date === '' ? 'Unknown' : air_date}</h3>
        </div>
        <div className="grid grid-cols-12 gap-4 mt-6">
            <div className="col-start-3 col-span-8 text-center lg:col-start-1 lg:col-span-3">
                <label htmlFor="episode" className="block text-lg font-semibold text-gray-700">Pick Episode</label>
                <SelectMenu name="Episode" setId={setId} total={51}/>
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

export default Episodes
