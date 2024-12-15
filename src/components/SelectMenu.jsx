import PropTypes from 'prop-types';

export default function RegionSelect({  setSelectedRegion }) {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const handleRegionChange = (e) => {
    const value = e.target.value
    setSelectedRegion(value)
  };

  return (
    <div className="region-select-container">
      <select 
        onChange={handleRegionChange}
        aria-label="Filter by Region"
        defaultValue=""
      >
        <option value="">Filter by Region</option>
        {regions.map(region => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
}

RegionSelect.propTypes = {
  setSelectedRegion: PropTypes.func.isRequired
};
