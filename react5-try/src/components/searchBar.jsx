import { useState } from 'react';



export function SearchBar({ setResults }) {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    // Örneğin, burada bir API çağrısı yapabilirsiniz
    const response = await Axios.get("https://api.disneyapi.dev/character");
    const data = await response.json();
    setResults(data.results);  // API'den gelen veriyi setResults ile güncelliyoruz
  };

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search..." 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
