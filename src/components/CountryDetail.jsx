import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./countryDetail.css";

export default function CountryDetail() {


  const param = useParams()
  const countryName = param.country
  const [countryData, setCountryData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        setCountryData({
          name: data.name.common,
          nativeName:
            Object.values(data.name.nativeName || {})[0]?.common || "",
          population: data.population || 0,
          region: data.region || "",
          subregion: data.subregion || "",
          capital: data.capital || [],
          tld: data.tld || [],
          currencies: Object.values(data.currencies || {}).map(
            (curr) => curr.name
          ),
          languages: Object.values(data.languages || {}),
          flags: data.flags || { png: "" },
        });
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching country data:', error);
        setIsLoading(false);
      });
  }, [countryName]);

  if (isLoading) {
    return <div className="loader"></div>;
  }

  if (!countryData) {
    return <div>No country data found</div>;
  }

  return (

    <main>
      <div className="country-details-container">
        <span className="back-button">
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img
            src={countryData.flags?.png || "/placeholder-flag.png"}
            alt={`Flag of ${countryData.name}`}
            className="country-flag"
            onError={(e) => {
              e.target.src = "/placeholder-flag.png";
              e.target.alt = "Flag not available";
            }}
          />
            <div className="details-text-container">
              <h1>{countryData.name}</h1>
              <div className="details-text">
                <p>
                  <b>Native Name: {countryData.nativeName}</b>
                  <span className="native-name"></span>
                </p>
                <p>
                  <b>
                    Population: {countryData.population.toLocaleString("en-IN")}
                  </b>
                  <span className="population"></span>
                </p>
                <p>
                  <b>Region: {countryData.region}</b>
                  <span className="region"></span>
                </p>
                <p>
                  <b>Sub Region: {countryData.subregion}</b>
                  <span className="sub-region"></span>
                </p>
                <p>
                  <b>Capital: {countryData.capital.join(", ")}</b>
                  <span className="capital"></span>
                </p>
                <p>
                  <b>Top Level Domain: {countryData.tld}</b>
                  <span className="top-level-domain"></span>
                </p>
                <p>
                  <b>Currencies: {countryData.currencies}</b>
                  <span className="currencies"></span>
                </p>
                <p>
                  <b>Languages: {countryData.languages}</b>
                  <span className="languages"></span>
                </p>
              </div>
              <div className="border-countries">
                <b>Border Countries: </b>&nbsp;
              </div>
            </div>
          </div>
        </div>
      </main>
    )
}

