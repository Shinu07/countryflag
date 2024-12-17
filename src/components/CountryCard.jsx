import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function CountryCard({
  name,
  population,
  region,
  capital,
  flag,
  language,
}) {
  return (
    <Link className="country-card" to={`/${name}`}>
    
      <img
        src={flag}
        alt={`Flag of ${name}`}
        className="country-flag"
        onError={(e) => {
          e.target.src = "/placeholder-flag.png"; // Add a placeholder flag image
          e.target.alt = "Flag not available";
        }}
      />
      <div className="country-info">
        <h2>{name}</h2>
        <p>
          <strong>Population:</strong>{" "}
          {population ? population.toLocaleString() : "N/A"}
        </p>
        <p>
          <strong>Region:</strong> {region || "N/A"}
        </p>
        <p>
          <strong>Capital:</strong> {capital}
        </p>
        <p>
          <strong>Languages:</strong> {language}
        </p>
      </div>
    </Link>
  );
}

CountryCard.propTypes = {
  name: PropTypes.string.isRequired,
  population: PropTypes.number,
  region: PropTypes.string,
  capital: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  language: PropTypes.string,
};
