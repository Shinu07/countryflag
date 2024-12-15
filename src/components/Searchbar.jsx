import PropTypes from 'prop-types';

export default function SearchBar({ setQuery }) {
  const handleSearch = (e) => {
    const value = e.target.value.trim();
    setQuery(value);
  };

  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        onChange={handleSearch}
        type="text"
        placeholder="Search your country..."
        aria-label="Search countries"
      />
    </div>
  );
}

SearchBar.propTypes = {
  setQuery: PropTypes.func.isRequired,
};
