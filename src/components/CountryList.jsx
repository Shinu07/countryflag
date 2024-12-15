import PropTypes from 'prop-types';
import countriesData from "/countriesData.js";
import CountryCard from "./CountryCard";


export default function CountryList({ query = '', region = '' }) {
  const filteredCountries = countriesData
    .filter(country => {
      const searchQuery = (query || '').toString().toLowerCase().trim();
      const countryName = country.name.common.toLowerCase();
      const countryRegion = (country.region || '').toLowerCase();
      const selectedRegion = (region || '').toLowerCase();
      
      return countryName.includes(searchQuery) && 
             (!selectedRegion || countryRegion === selectedRegion);
    })
    .map((country) => (
      <CountryCard 
        key={country.name.common}
        name={country.name.common}
        population={country.population || 0}
        region={country.region || 'N/A'}
        capital={country.capital?.[0] || 'N/A'}
        flag={country.flags?.png || country.flags?.svg || '/placeholder-flag.png'}
        language={country.languages ? Object.values(country.languages).join(', ') : 'N/A'}
      />
    ));

  return (
    <div className="countries-container">
      {filteredCountries.length > 0 ? (
        filteredCountries
      ) : (
        <div className="no-results">No countries found matching your criteria</div>
      )}
    </div>
  );
}


CountryList.propTypes={
    query:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    region:PropTypes.string
}