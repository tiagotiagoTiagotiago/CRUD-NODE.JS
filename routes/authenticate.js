const bcrypt = require('bcrypt');
const db = require('../db');

async function authenticateUser(username, password) {
  try {
    const user = await db.findOneByUsername(username);
    if (!user) {
      return { success: false, message: 'Usuário não encontrado.' };
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return { success: false, message: 'Senha incorreta.' };
    }

    return { success: true, message: 'Usuário autenticado com sucesso!' };
  } catch (error) {
    console.error('Erro na autenticação do usuário:', error);
    return { success: false, message: 'Erro na autenticação do usuário.' };
  }
}

module.exports = { authenticateUser };
