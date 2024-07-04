import { NavBar } from "../../components/NavBar";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { ContainerDad, Container, Imagi, ContainerSon, About, Button, ImagamProduct, Itens, Input, Select, ContainerButton } from "./createProduct.css";
import { useNavigate, useLocation } from 'react-router-dom';

export function CreateProduct() {
    const apiUrl = process.env.REACT_APP_API_URL;
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
    const [categorias, setCategorias] = useState([])
    const [usuarios, setUsuarios] = useState([])
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
    const [usuarioSelecionado, setusuarioSelecionado] = useState('');

    //pega todas as categorias e usuarios no mySql
    useEffect(() => {
        const fetchCategori = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/categoria`);
                console.log(response.data)
                setCategorias(response.data)
            } catch (error) {
                console.error("Error fetching categorias:", error);
            }
        };
        const fetchUsuario = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/usuario`);
                console.log(response.data)
                setUsuarios(response.data)
            } catch (error) {
                console.error("Error fetching categorias:", error);
            }
        };
        fetchCategori();
        fetchUsuario();
    }, [categoriaSelecionada]);

    //define cada item do fromData
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    //Salva a imagem e atualiza a imagem que esta mostrando
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
    //Alterna a categoria
    const handleChangeCategori = (e) => {
        const { name, value } = e.target;
        setCategoriaSelecionada(value)
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleChangeUsuario = (e) => {
        const { name, value } = e.target;
        setusuarioSelecionado(value)
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    //Volta pra tela anterior
    const Back = () => {
        navigate(previousPage);
    };

    //quando adiciona o produto
    const finish = async (e) => {
        e.preventDefault();

        const formDataWithImage = new FormData();

        if (imageFile) {
            formDataWithImage.append('imagem', imageFile);
        }
        formDataWithImage.append('idCategoria', formData.idCategoria);
        formDataWithImage.append('idUsuario', formData.idUsuario);
        formDataWithImage.append('nome', formData.nome);
        formDataWithImage.append('quantidade', formData.quantidade);
        formDataWithImage.append('preco', formData.preco);
        formDataWithImage.append('descricao', formData.descricao);
        console.log(formDataWithImage)
        console.log(formData)
        try {
            const response = await axios.post(`${apiUrl}/api/product`, formDataWithImage);
            console.log(response.data);
            navigate(previousPage);
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    return (
        <>
            <NavBar />
            <form onSubmit={finish}>
                <ContainerDad>
                    <h1>Criando produto</h1>
                    <Container>
                        <ImagamProduct>{
                            imagePreview ? (
                                <Imagi src={imagePreview || "Não encontrado"} alt={formData.imagem} />
                            ) : (
                                <h3>Selecione uma imagem</h3>
                            )
                        }
                            <input type="file" accept="image/*" onChange={handleImageChange} required={true} />
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
                                            required={true}
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
                                            required={true}
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
                                            required={true}
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
                                            required={true}
                                        />
                                    </label>
                                </Itens>
                                <Itens>
                                    <label>
                                        Categoria:
                                        <Select
                                            name="idCategoria"
                                            value={usuarioSelecionado}
                                            onChange={handleChangeUsuario}
                                            required={true}
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
                                <Itens>
                                    <label>
                                        Vendedor:
                                        <Select
                                            name="idUsuario"
                                            value={categoriaSelecionada}
                                            onChange={handleChangeCategori}
                                            required={true}
                                        >
                                            <option value="" disabled>Selecione um vendedor</option>
                                            {usuarios.map((usuario) => (
                                                <option key={usuario.id} value={usuario.id}>
                                                    {usuario.nome}
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
    );
}