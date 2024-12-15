export default function SelectMenu() {
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
  
  return (
    <select className="filter-by-region">
    <option hidden="">Filter by Regions</option>
    {regions.map((region)=>(
        <option key={region} value={region}>{region}</option>
    ))}
    </select>
  );
}

