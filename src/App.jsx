// import { useState } from 'react'

import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/Searchbar";
import SelectMenu from "./components/SelectMenu";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar />
          <SelectMenu />
        </div>
      </main>
    </>
  );
}

export default App;
