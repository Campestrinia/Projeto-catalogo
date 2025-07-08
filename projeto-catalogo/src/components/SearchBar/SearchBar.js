import React, { useState } from 'react';
import axios from 'axios';

export function SearchBar() {
  const [termoBusca, setTermoBusca] = useState('');
  const [resultados, setResultados] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/product?nome=${termoBusca}`);
      setResultados(response.data);
    } catch (error) {
      console.error('Erro na busca:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar produto..."
        value={termoBusca}
        onChange={(e) => setTermoBusca(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>

      <ul>
        {resultados.map((item) => (
          <li key={item.id}>{item.nome}</li>
        ))}
      </ul>
    </div>
  );
}
export default SearchBar;
