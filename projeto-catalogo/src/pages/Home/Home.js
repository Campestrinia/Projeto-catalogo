import { NavBar } from '../../components/NavBar';
import { Footer } from '../../components/Footer'
import { Highlight } from '../../components/Highlight/Highlights';
import { Products } from '../../components/Products/Products';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './home.css';


export function Home() {
    const [products, setProducts] = useState([]);
    const apiBackEnd = process.env.REACT_APP_API_URL;
    console.log(apiBackEnd)
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${apiBackEnd}/api/product`)

                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, [apiBackEnd]);
    console.log(products)

    if (products.length < 0) {
        return (<div>Carregando</div>)
    }
    return (<>
        <GlobalStyle />
        <NavBar />
        <Highlight products={products.slice(-18)} />
        <Products products={products} />
        <Footer />
    </>
    )
}
