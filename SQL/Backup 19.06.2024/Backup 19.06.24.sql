-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: api_projeto
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(200) DEFAULT NULL,
  `descricao` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'Processador','Componente que executa as instruções de um computador'),(2,'Fonte de Alimentação','Dispositivo que fornece energia elétrica para o computador'),(3,'Gabinete','Estrutura que abriga os componentes do computador'),(4,'Cooler','Dispositivo usado para diminuir a temperatura dos componentes'),(5,'Armazenamento','Dispositivos responsáveis pelo armazenamento de dados'),(6,'Memorias','Componentes que armazenam dados temporariamente para rápido acesso'),(7,'Placa mãe','Placa principal que conecta todos os componentes do computador'),(8,'Placa de rede','Placa usada para conectar o computador a uma rede'),(9,'Teclados','Dispositivo de entrada que permite ao usuário interagir com o computador'),(10,'Monitores','Dispositivo de saída que exibe informações visuais do computador'),(11,'Mouses','Dispositivo de entrada que permite ao usuário interagir com o sistema gráfico do computador'),(12,'Headsets','Dispositivos de áudio que combinam fones de ouvido e microfone'),(13,'Webcams','Câmeras digitais projetadas para capturar vídeos e imagens'),(14,'Adaptadores','Dispositivos que convertem atributos de um dispositivo ou sistema para os de outro'),(15,'Cabos','Condutores que permitem a transmissão de dados ou energia elétrica entre dispositivos'),(16,'Placa de Vídeo','Dispositivo responsável pela renderização de gráficos e imagens no computador');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `endereco`
--

DROP TABLE IF EXISTS `endereco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `endereco` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rua` varchar(200) NOT NULL,
  `CEP` varchar(200) NOT NULL,
  `cidade` varchar(200) NOT NULL,
  `numero` int NOT NULL,
  `idUsuario` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idUsuario` (`idUsuario`),
  CONSTRAINT `endereco_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `endereco`
--

LOCK TABLES `endereco` WRITE;
/*!40000 ALTER TABLE `endereco` DISABLE KEYS */;
/*!40000 ALTER TABLE `endereco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(200) DEFAULT NULL,
  `preco` float DEFAULT NULL,
  `descricao` varchar(200) DEFAULT NULL,
  `quantidade` int DEFAULT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  `idCategoria` int NOT NULL,
  `idUsuario` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idCategoria` (`idCategoria`),
  KEY `idUsuario` (`idUsuario`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`idCategoria`) REFERENCES `categoria` (`id`),
  CONSTRAINT `product_ibfk_2` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (67,'Coller',52.2783,'Dispositivo para resfriar componentes do computador',1,'Coller.jpg',4,1),(68,'Estabilizador',88.1087,'Dispositivo para estabilizar a tensão elétrica',1,'Estabilizador.jpg',2,1),(69,'Fonte 650',93.7086,'Fonte de alimentação de 650W para computadores',1,'Fonte 650.jpg',2,1),(70,'Gabinete Moster',14.2168,'Gabinete robusto e espaçoso para componentes de computador',1,'Gabinete Moster.jpg',3,1),(71,'HD',49.9584,'Disco rígido para armazenamento interno de dados',1,'HD.jpg',5,1),(72,'Headset',17.1414,'Conjunto de fones de ouvido com microfone integrado',1,'Headset.jpg',12,1),(73,'Placa de video RTX3050',15.8319,'Placa de vídeo com tecnologia RTX3050 para gráficos avançados',1,'Placa de video RTX3050.jpg',16,1),(74,'Memoria Ram',17.7353,'Módulo de memória RAM para acesso rápido a dados',1,'Memoria Ram.jpg',6,1),(75,'Monitor Sansung',31.1808,'Monitor da marca Samsung com alta definição de imagem',1,'Monitor Sansung.jpg',10,1),(76,'Mouse',92.6981,'Dispositivo apontador ergonômico para computadores',1,'Mouse.jpg',11,1),(77,'Mousepad',89.9481,'Superfície plana para melhorar o movimento do mouse',1,'mousepad.jpg',11,1),(78,'Placa de rede',71.6463,'Placa utilizada para conectar o computador a uma rede',1,'Placa de rede.jpg',8,1),(79,'Placa de video RTX3050Ti',78.3871,'Placa de vídeo avançada com tecnologia RTX3050Ti para gráficos intensos',1,'Placa de video RTX3050.jpg',16,1),(80,'Placa mãe Asus ROG Strix B550-F Gaming Wi-Fi II ATX AM4 Motherboard',76.9967,'Placa mãe Asus ROG Strix B550-F Gaming Wi-Fi II ATX AM4 Motherboard',1,'Placa mãe.jpg',7,1),(81,'Processador Intel Core i9-12900K',49.8222,'Processador Intel Core i9-12900K',1,'Processador Intel.jpg',1,1),(82,'Processador AMD Ryzen Threadripper PRO 5995WX',98.1208,'Processador AMD Ryzen Threadripper PRO 5995WX',1,'Processador.jpg',1,1),(83,'Processador Intel',61.1374,'Processador da marca Intel',1,'Processador Intel.jpg',1,1),(84,'Processador',91.3248,'Unidade central de processamento para computadores',1,'Processador.jpg',1,1),(85,'Sdd Sata',83.2118,'Disco de estado sólido com interface SATA para armazenamento de dados',1,'Sdd Sata.jpg',5,1),(86,'Ssd',42.0845,'Disco de estado sólido para armazenamento rápido de dados',1,'Ssd.jpg',5,1),(87,'Teclado',40.7872,'Dispositivo de entrada para digitação e comandos em computadores',1,'Teclado.jpg',9,1),(88,'WatterColler',67.6824,'Sistema de refrigeração líquida para componentes do computador',1,'WatterColler.jpg',4,1);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `CPF` varchar(200) NOT NULL,
  `telefone` varchar(200) NOT NULL,
  `senha` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Teste','Teste','Teste','Teste','Teste');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-19  0:58:14
