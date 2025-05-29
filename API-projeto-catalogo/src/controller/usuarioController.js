// const { usuario } = require("../config/database.js");
const userService = require("../service/usuario.js");

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
    const validarEmail = await userService.getEmailById(email)
    console.log('aqui')
    console.log(validarEmail)
    if (validarEmail.id) {
      res.status(400).send({ message: "E-mail já cadastrado" })
      return
    }
    const usuario = await userService.createUsuario(nome, email, CPF, telefone, senha);
    console.log('aqui 2')
    console.log(usuario)
    console.log('aqui 3')
    res.status(201).json({ message: `Success`, idUsuario: usuario.id, token: usuario.token });
    console.log('aqui 4')
  } catch (eror) {
    res.status(500).send({
      message: `error adding user!`,
      error: eror.message,
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

    console.log("ID do usuário autenticado:", idUsuario);

    const user = idUsuario
      ? await userService.getUsuarioById(id)   // Com token
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
}