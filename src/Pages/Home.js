import React, {useState, useEffect} from 'react'
import Cards from "../components/Cards/Cards";
import Filters from "../components/Filters/Filters";
import Pagination from "../components/Pagination/Pagination";
import Search from "../components/Search/Search";

const Home = ({ addToCart }) => {
    let [pageNumber, setPageNumber] = useState(1);
    let [search, setSearch] = useState("");
    let [status, setStatus] = useState("");
    let [gender, setGender] = useState("");
    let [species, setSpecies] = useState("");

    let [fetchedData, updateFetchedData] = useState([]);
    let {info, results} = fetchedData;

    let api = `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

    useEffect(() => {
      (async function(){
        let data = await fetch(api).then(res => res.json());
        updateFetchedData(data);
      })()
    }, [api])

    return (
      <div>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-8">
          <h2 className="text-4xl text-gray-700 text-center font-semibold">Charachters</h2>
          <div className="grid grid-cols-12 gap-4 mt-6">
            <div className="col-start-3 col-span-8 lg:col-start-1 lg:col-span-3">
              <Filters
                setStatus={setStatus}
                setGender={setGender}
                setSpecies={setSpecies}
                setPageNumber={setPageNumber}
              />
            </div>
            <div className="col-start-3 col-span-8 lg:col-start-4">
              <Search setSearch={setSearch} setPageNumber={setPageNumber}/>
              <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Cards results={results} addToCart={addToCart} />
              </ul>
              <div className="my-6">
                <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} pages={info?.pages}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home
