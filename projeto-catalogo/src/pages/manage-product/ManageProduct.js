import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  ContainerDad,
  Container,
  Imagi,
  FormContainer,
  FormGroup,
  Label,
  Input,
  Select,
  ButtonContainer,
  Button,
  ImagePreviewContainer,
  FileInputLabel,
  FileInput,
} from "./manegeProduct.css";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { message, Modal } from "antd";
import { LoginContext } from "../../context/Lcontext";

export function ManageProduct() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const previousPage = location.state?.from || "/";

  // 3. OBTENDO O USUÁRIO DO CONTEXTO
  const { user } = useContext(LoginContext);

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Se não houver usuário, não permitir acesso à página
    if (!user) {
      message.error("Você precisa estar logado para editar um produto.");
      navigate("/login");
      return;
    }

    const fetchInitialData = async () => {
      try {
        const [productResponse, categoriesResponse] = await Promise.all([
          axios.get(`${apiUrl}/api/product/${id}`),
          axios.get(`${apiUrl}/api/categoria`),
        ]);

        // Verifica se o usuário logado é o dono do produto
        if (user.id !== productResponse.data.idUsuario) {
          message.error("Você não tem permissão para editar este produto.");
          navigate("/");
          return;
        }

        const productData = productResponse.data;
        setFormData(productData);
        setCategorias(categoriesResponse.data);
        setImagePreview(`${apiUrl}/images/${productData.imagem}`);
      } catch (error) {
        console.error("Erro ao buscar dados iniciais:", error);
        message.error("Não foi possível carregar os dados para edição.");
      } finally {
        setLoading(false);
      }
    };
    fetchInitialData();
  }, [id, apiUrl, user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const Back = () => {
    navigate(previousPage);
  };

  const DeleteProduct = () => {
    Modal.confirm({
      title: "Você tem certeza que deseja deletar este produto?",
      content: "Esta ação não poderá ser desfeita.",
      okText: "Sim, deletar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk: async () => {
        try {
          // 4. ADICIONADO O HEADER DE AUTORIZAÇÃO
          await axios.delete(`${apiUrl}/api/product/${id}`, {
            headers: { Authorization: `Bearer ${user.token}` },
          });
          message.success("Produto deletado com sucesso!");
          navigate("/");
        } catch (error) {
          console.error("Erro ao deletar produto:", error);
          message.error("Falha ao deletar o produto.");
        }
      },
    });
  };

  const finish = async (e) => {
    e.preventDefault();
    try {
      if (imageFile) {
        const formDataWithImage = new FormData();
        formDataWithImage.append("imagem", imageFile);
        Object.keys(formData).forEach((key) => {
          if (key !== "imagem") {
            formDataWithImage.append(key, formData[key]);
          }
        });
        // 5. ADICIONADO O HEADER DE AUTORIZAÇÃO
        await axios.put(`${apiUrl}/api/product/${id}`, formDataWithImage, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
      } else {
        // 6. ADICIONADO O HEADER DE AUTORIZAÇÃO
        await axios.put(`${apiUrl}/api/productNoImage/${id}`, formData, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
      }
      message.success("Produto atualizado com sucesso!");
      navigate(previousPage);
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
      message.error("Falha ao atualizar o produto. Verifique os dados.");
    }
  };

  if (loading) {
    return (
      <ContainerDad>
        <h1>Carregando...</h1>
      </ContainerDad>
    );
  }

  return (
    <ContainerDad>
      <form onSubmit={finish}>
        <h1>Editando produto</h1>
        <Container>
          <ImagePreviewContainer>
            <Imagi src={imagePreview} alt="Pré-visualização do produto" />
            <FileInputLabel htmlFor="file-upload">Trocar Imagem</FileInputLabel>
            <FileInput
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </ImagePreviewContainer>
          <FormContainer>
            <FormGroup>
              <Label>Nome:</Label>
              <Input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Preço:</Label>
              <Input
                type="number"
                name="preco"
                value={formData.preco}
                onChange={handleChange}
                required
                step="0.01"
              />
            </FormGroup>
            <FormGroup>
              <Label>Descrição:</Label>
              <Input
                as="textarea"
                rows="4"
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Quantidade:</Label>
              <Input
                type="number"
                name="quantidade"
                value={formData.quantidade}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Categoria:</Label>
              <Select
                name="idCategoria"
                value={formData.idCategoria}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Selecione uma categoria
                </option>
                {categorias.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.nome}
                  </option>
                ))}
              </Select>
            </FormGroup>
            <ButtonContainer>
              <Button type="submit" primary>
                Atualizar produto
              </Button>
              <Button type="button" danger onClick={DeleteProduct}>
                Deletar produto
              </Button>
              <Button type="button" onClick={Back}>
                Cancelar
              </Button>
            </ButtonContainer>
          </FormContainer>
        </Container>
      </form>
    </ContainerDad>
  );
}
