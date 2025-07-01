import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ContainerDad,
  Container,
  Imagi,
  ContainerSon,
  About,
  Button,
  ImagemProduct,
  Itens,
  Input,
  Select,
  ContainerButton,
} from "./manegeProduct.css";
import { useParams, useNavigate, useLocation } from "react-router-dom";

export function ManageProduct() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const previousPage = location.state?.from || "/";
  const [formData, setFormData] = useState({
    nome: "",
    preco: "",
    descricao: "",
    quantidade: "",
    idCategoria: "",
    imagem: "",
  });
  const [categorias, setCategorias] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [ifImage, setIfImage] = useState(false);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/product/${id}`);
        setFormData({
          id: response.data.id,
          idCategoria: response.data.idCategoria,
          idUsuario: response.data.idUsuario,
          nome: response.data.nome,
          quantidade: response.data.quantidade,
          imagem: response.data.imagem,
          preco: response.data.preco,
          descricao: response.data.descricao,
        });
        console.log(response.data);
        setCategoriaSelecionada(response.data.idCategoria);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [id, apiUrl]);

  useEffect(() => {
    const fetchCategori = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/categoria`);
        console.log(response.data);
        setCategorias(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchCategori();
  }, [categoriaSelecionada, apiUrl]);

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
    setIfImage(true);

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

  const DeleteProduct = async () => {
    try {
      console.log(id);
      navigate("/");
      const response = await axios.delete(`${apiUrl}/api/product/${id}`);
      console.log(response.data);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const Back = () => {
    navigate(previousPage);
  };

  const finish = async (e) => {
    e.preventDefault();

    const formDataWithImage = new FormData();

    if (imageFile) {
      formDataWithImage.append("imagem", imageFile);
    }
    formDataWithImage.append("idCategoria", categoriaSelecionada);
    formDataWithImage.append("idUsuario", formData.idUsuario);
    formDataWithImage.append("nome", formData.nome);
    formDataWithImage.append("quantidade", formData.quantidade);
    formDataWithImage.append("preco", formData.preco);
    formDataWithImage.append("descricao", formData.descricao);
    try {
      console.log(ifImage);
      if (ifImage) {
        const response = await axios.put(
          `${apiUrl}/api/product/${id}`,
          formDataWithImage
        );
        console.log(response.data);
      } else if (!ifImage) {
        console.log(!ifImage);
        const response = await axios.put(
          `${apiUrl}/api/productNoImage/${id}`,
          formData
        );
        console.log(response.data);
      }

      navigate(previousPage);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <>
      <form onSubmit={finish}>
        <ContainerDad>
          <h1>Editando produto</h1>
          <Container>
            <ImagemProduct>
              <Imagi
                src={
                  imagePreview ||
                  `${apiUrl}/images/${formData.imagem || "Não encontrado"}`
                }
                alt={formData.imagem}
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </ImagemProduct>
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
                      value={categoriaSelecionada}
                      onChange={handleChangeCategori}
                      required={true}
                    >
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
                <Button type="submit">Atualizar produto</Button>
                <Button type="button" onClick={DeleteProduct}>
                  Deletar produto
                </Button>
                <Button type="button" onClick={Back}>
                  Cancelar
                </Button>
              </ContainerButton>
            </ContainerSon>
          </Container>
        </ContainerDad>
      </form>
    </>
  );
}
