import React, { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Pesquisar produtos..."
        value={searchTerm} 
        onChange={handleChange} 
      />
    </div>
  );
};

export default SearchBar;