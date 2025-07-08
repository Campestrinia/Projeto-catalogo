import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AutoComplete, Input } from 'antd';
import { useNavigate } from "react-router-dom";


export function SearchBar() {
  // const [termoBusca, setTermoBusca] = useState('');
  const [produtos, setProdutos] = useState([]);
  // const [resultados, setResultados] = useState([]);
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();

  const handleSearch = value => {
    setOptions(value ? searchResult(value) : []);
  };

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/product');
        // console.log(response.data);
        setProdutos(response.data);
      } catch (error) {
        console.error('Erro na busca:', error);
      }
    };

    fetchProdutos();
  }, []);
  const onSelect = (value, option) => {
    console.log('Produto selecionado:', value); // nome
    console.log('ID do produto:', option.id);   // id
    navigate(`/product/${option.id}`);
  };


  const searchResult = query =>
    produtos
      .filter(produto =>
        produto.nome.toLowerCase().includes(query.toLowerCase())
      )
      .map(produto => {
        return {
          value: produto.nome,
          label: (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '8px',
              }}
            >
              <img
                src={`http://localhost:3001/images/${produto.imagem}`}
                alt={produto.nome}
                style={{
                  width: '50px',
                  height: '50px',
                  objectFit: 'cover',
                  borderRadius: '6px',
                }}
              />
              <span>
                <strong>{produto.nome}</strong>
              </span>
            </div>

          ),
          id: produto.id, // Aqui você adiciona o ID
        };
      });



  return (
    <div>
      <AutoComplete
        popupMatchSelectWidth={true}
        style={{ width: '50rem' }}
        options={options}
        onSelect={onSelect}
        onSearch={handleSearch}
        notFoundContent={
          options.length === 0 ? (
            <div style={{ padding: '8px 12px', color: '#999' }}>
              Nenhum produto encontrado.
            </div>
          ) : null}
      >
        <Input.Search
          className="my-custom-search"
          size="large"
          placeholder="Procure um produto aqui"
          enterButton
        />

      </AutoComplete>
    </div>
  );
}
export default SearchBar;
