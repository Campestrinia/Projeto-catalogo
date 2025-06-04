const userService = require("../service/usuario.js");
const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database");


async function createCarrinhoIfNotExists(idUsuario) {
  const connection = await mysql.createConnection(databaseConfig);
  try {
    const [rows] = await connection.query('SELECT * FROM carrinho WHERE idUsuario = ?', [idUsuario]);

    if (rows.length === 0) {
      await connection.query('INSERT INTO carrinho (idUsuario) VALUES (?)', [idUsuario]);
      console.log(`Carrinho criado para o usuário ID ${idUsuario}`);
    } else {
      console.log(`Carrinho já existia para o usuário ID ${idUsuario}`);
    }
  } catch (error) {
    console.error("Erro ao verificar/criar carrinho:", error);
  } finally {
    await connection.end();
  }
}

async function getAllUsuario(req, res) {
  try {
    const rows = await userService.getAllUsuario();
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).send({
      message: "Error getting users",
      body: error.message,
    });
  }
}

async function createUsuario(req, res) {
  const { nome, email, CPF, telefone, senha } = req.body;

  try {
    const validarEmail = await userService.getEmailById(email);

    if (validarEmail.id) {
      res.status(400).send({ message: "E-mail já cadastrado" });
      return;
    }

    const usuario = await userService.createUsuario(nome, email, CPF, telefone, senha);
    res.status(201).json({ message: `Success`, idUsuario: usuario.id, token: usuario.token });
  } catch (error) {
    res.status(500).send({
      message: `error adding user!`,
      error: error.message,
    });
  }
}

async function updateUsuario(req, res) {
  try {
    const { id } = req.params;
    const { nome, email, CPF, telefone, senha } = req.body;
    await userService.updateUsuario(id, nome, email, CPF, telefone, senha);

    res.status(200).json("Success");
  } catch (error) {
    res.status(500).send({
      message: `Error updating user`,
      body: error.message,
    });
  }
}

async function deleteUsuario(req, res) {
  try {
    const { id } = req.params;
    await userService.deleteUsuario(id);

    res.status(200).send({ message: "Deleted user" });
  } catch (error) {
    res.status(500).send({
      message: "Erros deleting user",
      error: error.message,
    });
  }
}

async function getUsuarioById(req, res) {
  try {
    const { id } = req.params;
    const idUsuario = req.idUsuario;

    const user = idUsuario
      ? await userService.getUsuarioById(id) // Com token
      : await userService.getUsuarioByIdSemToken(id); // Sem token

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send({
      message: "Error getting user by ID",
      error: error.message,
    });
  }
}

async function login(req, res) {
  try {
    const { email, senha } = req.body;

    const user = await userService.login(email, senha);

    if (user == 'E-mail inválido') {
      res.status(401).json({ error: 'Email inválido' });
    } else if (user == 'Senha inválido') {
      res.status(401).json({ error: 'Senha inválida' });
    } else if (user.length == 0) {
      res.status(401).json({ error: 'Email ou senha inválida' });
    } else {
      await createCarrinhoIfNotExists(user.id);

      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).send({
      message: "Error login",
      error: error.message,
    });
  }
}

module.exports = {
  getAllUsuario,
  createUsuario,
  updateUsuario,
  deleteUsuario,
  getUsuarioById,
  login
};
