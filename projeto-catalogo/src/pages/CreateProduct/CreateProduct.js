import { NavBar } from "../../components/NavBar";
import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { ContainerDad, Container, Imagi, ContainerSon, About, Button, ImagamProduct, Itens, Input, Select, ContainerButton } from "./createProduct.css";
import { useNavigate, useLocation } from 'react-router-dom';
import { LoginContext } from '../../context/Lcontext';

// ...seus imports

export function CreateProduct() {
    const apiUrl = process.env.REACT_APP_API_URL;
    const { user } = useContext(LoginContext);
    const navigate = useNavigate();
    const location = useLocation();
    const previousPage = location.state?.from || '/';

    const [formData, setFormData] = useState({
        nome: '',
        preco: '',
        descricao: '',
        quantidade: '',
        idCategoria: '',
        idUsuario: '',
        imagem: ''
    });
    const [categorias, setCategorias] = useState([]);
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('');

    // 🔐 Se não tiver user, volta para login
    useEffect(() => {
        if (!Object.keys(user).length > 0) {
            navigate('/login');
        }
    }, [user, navigate]);

    useEffect(() => {
        const fetchCategori = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/categoria`);
                setCategorias(response.data);
            } catch (error) {
                console.error("Error fetching categorias:", error);
            }
        };

        fetchCategori();
    }, [apiUrl]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleChangeCategori = (e) => {
        const { name, value } = e.target;
        setCategoriaSelecionada(value);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const Back = () => {
        navigate(previousPage);
    };

    const finish = async (e) => {
        e.preventDefault();
        const formDataWithImage = new FormData();

        if (imageFile) {
            formDataWithImage.append('imagem', imageFile);
        }
        formDataWithImage.append('idCategoria', formData.idCategoria);
        formDataWithImage.append('idUsuario', user.id);
        formDataWithImage.append('nome', formData.nome);
        formDataWithImage.append('quantidade', formData.quantidade);
        formDataWithImage.append('preco', formData.preco);
        formDataWithImage.append('descricao', formData.descricao);

        try {
            await axios.post(`${apiUrl}/api/product`, formDataWithImage);
            navigate(previousPage);
        } catch (error) {
            console.error("Error creating product:", error);
        }
    };

    return (
        <>
            <NavBar />
            {user && user.id ?
                <>
                    <form onSubmit={finish}>
                        <ContainerDad>
                            <h1>Criando produto</h1>
                            <Container>
                                <ImagamProduct>
                                    {imagePreview ? (
                                        <Imagi src={imagePreview} alt="Preview" />
                                    ) : (
                                        <h3>Selecione uma imagem</h3>
                                    )}
                                    <input type="file" accept="image/*" onChange={handleImageChange} required />
                                </ImagamProduct>
                                <ContainerSon>
                                    <About>
                                        <Itens>
                                            <label>
                                                Nome:
                                                <Input
                                                    type="text"
                                                    name="nome"
                                                    value={formData.nome}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </label>
                                        </Itens>
                                        <Itens>
                                            <label>
                                                Preço:
                                                <Input
                                                    type="text"
                                                    name="preco"
                                                    value={formData.preco}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </label>
                                        </Itens>
                                        <Itens>
                                            <label>
                                                Descrição:
                                                <Input
                                                    type="text"
                                                    name="descricao"
                                                    value={formData.descricao}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </label>
                                        </Itens>
                                        <Itens>
                                            <label>
                                                Quantidade:
                                                <Input
                                                    type="text"
                                                    name="quantidade"
                                                    value={formData.quantidade}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </label>
                                        </Itens>
                                        <Itens>
                                            <label>
                                                Categoria:
                                                <Select
                                                    name="idCategoria"
                                                    value={categoriaSelecionada}
                                                    onChange={handleChangeCategori}
                                                    required
                                                >
                                                    <option value="" disabled>Selecione uma categoria</option>
                                                    {categorias.map((categoria) => (
                                                        <option key={categoria.id} value={categoria.id}>
                                                            {categoria.nome}
                                                        </option>
                                                    ))}
                                                </Select>
                                            </label>
                                        </Itens>
                                    </About>
                                    <ContainerButton>
                                        <Button type="submit">Criar produto</Button>
                                        <Button type="button" onClick={Back}>Cancelar</Button>
                                    </ContainerButton>
                                </ContainerSon>
                            </Container>
                        </ContainerDad>
                    </form>
                </>
                : <h1>Carregando...</h1>}
        </>
    );
}
