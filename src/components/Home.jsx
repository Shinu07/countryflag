// import React from "react";
import { useState } from "react";
import SearchBar from "./Searchbar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountryList";
// import { Routes, Route } from "react-router-dom";
 
  export default function Home() {
    const [query, setQuery] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");
  
    return (
      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenu setSelectedRegion={setSelectedRegion} />
        </div>
        <CountriesList query={query} region={selectedRegion} />
      </main>
    );
  }

