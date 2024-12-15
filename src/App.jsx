import { useState } from 'react'
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/Searchbar";
import SelectMenu from "./components/SelectMenu";
import CountriesList from "./components/CountryList"

function App() {
  const [query, setQuery] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('')
  
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenu setSelectedRegion={setSelectedRegion} />
        </div>
        <CountriesList query={query} region={selectedRegion}/>
      </main>
    </>
  );
}

export default App;
