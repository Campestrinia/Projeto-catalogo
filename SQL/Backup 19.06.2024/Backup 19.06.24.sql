use api_projeto;

SELECT * FROM categoria;
select * from usuario;
select * from product ;
select * from endereco;
Select * from favoritos;
Select * from cart;

CREATE TABLE favoritos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idUsuario INT NOT NULL,
    idProduct INT NOT NULL,
    
    FOREIGN KEY (idUsuario) REFERENCES usuario(id) ON DELETE CASCADE,
    FOREIGN KEY (idProduct) REFERENCES product(id) ON DELETE CASCADE
);

INSERT INTO categoria (nome, descricao) VALUES
('Processador', 'Componente que executa as instruções de um computador'),
('Fonte de Alimentação', 'Dispositivo que fornece energia elétrica para o computador'),
('Gabinete', 'Estrutura que abriga os componentes do computador'),
('Cooler', 'Dispositivo usado para diminuir a temperatura dos componentes'),
('Armazenamento', 'Dispositivos responsáveis pelo armazenamento de dados'),
('Memorias', 'Componentes que armazenam dados temporariamente para rápido acesso'),
('Placa mãe', 'Placa principal que conecta todos os componentes do computador'),
('Placa de rede', 'Placa usada para conectar o computador a uma rede'),
('Teclados', 'Dispositivo de entrada que permite ao usuário interagir com o computador'),
('Monitores', 'Dispositivo de saída que exibe informações visuais do computador'),
('Mouses', 'Dispositivo de entrada que permite ao usuário interagir com o sistema gráfico do computador'),
('Headsets', 'Dispositivos de áudio que combinam fones de ouvido e microfone'),
('Webcams', 'Câmeras digitais projetadas para capturar vídeos e imagens'),
('Adaptadores', 'Dispositivos que convertem atributos de um dispositivo ou sistema para os de outro'),
('Cabos', 'Condutores que permitem a transmissão de dados ou energia elétrica entre dispositivos'),
('Placa de Vídeo', 'Dispositivo responsável pela renderização de gráficos e imagens no computador');


INSERT INTO product (nome, preco, descricao, quantidade, imagem, idCategoria, idUsuario) VALUES
('Coller', 120.00, 'Dispositivo para resfriar componentes do computador', 1, 'Coller.jpg', (SELECT id FROM categoria WHERE nome = 'Cooler'), 1),
('Estabilizador', 230.00, 'Dispositivo para estabilizar a tensão elétrica', 1, 'Estabilizador.jpg', (SELECT id FROM categoria WHERE nome = 'Fonte de Alimentação'), 1),
('Fonte 650', 400.00, 'Fonte de alimentação de 650W para computadores', 1, 'Fonte 650.jpg', (SELECT id FROM categoria WHERE nome = 'Fonte de Alimentação'), 1),
('Gabinete Moster', 350.00, 'Gabinete robusto e espaçoso para componentes de computador', 1, 'Gabinete Moster.jpg', (SELECT id FROM categoria WHERE nome = 'Gabinete'), 1),
('HD', 320.00, 'Disco rígido para armazenamento interno de dados', 1, 'HD.jpg', (SELECT id FROM categoria WHERE nome = 'Armazenamento'), 1),
('Headset', 180.00, 'Conjunto de fones de ouvido com microfone integrado', 1, 'Headset.jpg', (SELECT id FROM categoria WHERE nome = 'Headsets'), 1),
('Placa de video RTX3050', 1400.00, 'Placa de vídeo com tecnologia RTX3050 para gráficos avançados', 1, 'Placa de video RTX3050.jpg', (SELECT id FROM categoria WHERE nome = 'Placa de Vídeo'), 1),
('Memoria Ram', 320.00, 'Módulo de memória RAM para acesso rápido a dados', 1, 'Memoria Ram.jpg', (SELECT id FROM categoria WHERE nome = 'Memorias'), 1),
('Monitor Sansung', 900.00, 'Monitor da marca Samsung com alta definição de imagem', 1, 'Monitor Sansung.jpg', (SELECT id FROM categoria WHERE nome = 'Monitores'), 1),
('Mouse', 80.00, 'Dispositivo apontador ergonômico para computadores', 1, 'Mouse.jpg', (SELECT id FROM categoria WHERE nome = 'Mouses'), 1),
('Mousepad', 50.00, 'Superfície plana para melhorar o movimento do mouse', 1, 'mousepad.jpg', (SELECT id FROM categoria WHERE nome = 'Mouses'), 1),
('Placa de rede', 100.00, 'Placa utilizada para conectar o computador a uma rede', 1, 'Placa de rede.jpg', (SELECT id FROM categoria WHERE nome = 'Placa de rede'), 1),
('Placa de video RTX3050Ti', 1500.00, 'Placa de vídeo avançada com tecnologia RTX3050Ti para gráficos intensos', 1, 'Placa de video RTX3050.jpg', (SELECT id FROM categoria WHERE nome = 'Placa de Vídeo'), 1),
('Placa mãe Asus ROG Strix B550-F Gaming Wi-Fi II ATX AM4 Motherboard', 1300.00, 'Placa mãe Asus ROG Strix B550-F Gaming Wi-Fi II ATX AM4 Motherboard', 1, 'Placa mãe.jpg', (SELECT id FROM categoria WHERE nome = 'Placa mãe'), 1),
('Processador Intel Core i9-12900K', 1500.00, 'Processador Intel Core i9-12900K', 1, 'Processador Intel.jpg', (SELECT id FROM categoria WHERE nome = 'Processador'), 1),
('Processador AMD Ryzen Threadripper PRO 5995WX', 1500.00, 'Processador AMD Ryzen Threadripper PRO 5995WX', 1, 'Processador.jpg', (SELECT id FROM categoria WHERE nome = 'Processador'), 1),
('Processador Intel', 800.00, 'Processador da marca Intel', 1, 'Processador Intel.jpg', (SELECT id FROM categoria WHERE nome = 'Processador'), 1),
('Processador', 600.00, 'Unidade central de processamento para computadores', 1, 'Processador.jpg', (SELECT id FROM categoria WHERE nome = 'Processador'), 1),
('Sdd Sata', 290.00, 'Disco de estado sólido com interface SATA para armazenamento de dados', 1, 'Sdd Sata.jpg', (SELECT id FROM categoria WHERE nome = 'Armazenamento'), 1),
('Ssd', 400.00, 'Disco de estado sólido para armazenamento rápido de dados', 1, 'Ssd.jpg', (SELECT id FROM categoria WHERE nome = 'Armazenamento'), 1),
('Teclado', 100.00, 'Dispositivo de entrada para digitação e comandos em computadores', 1, 'Teclado.jpg', (SELECT id FROM categoria WHERE nome = 'Teclados'), 1),
('WatterColler', 750.00, 'Sistema de refrigeração líquida para componentes do computador', 1, 'WatterColler.jpg', (SELECT id FROM categoria WHERE nome = 'Cooler'), 1);
