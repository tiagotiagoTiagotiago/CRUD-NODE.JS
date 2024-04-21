const bcrypt = require('bcrypt');
const db = require('../db');

async function updatePassword(id, newPassword) {
  try {
    const passwordValidationResult = checkPassword(newPassword);
    if (!passwordValidationResult.valid) {
      return { success: false, message: passwordValidationResult.message };
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await db.update(id, { password: hashedPassword });

    return { success: true, message: 'Senha atualizada com sucesso!' };
  } catch (error) {
    console.error('Erro ao atualizar senha do usuário:', error);
    return { success: false, message: 'A senha tem que conter 1 letra maiuscula, 1 caracter especial e 1 numero' };
  }
}

function checkPassword(password) {
}

module.exports = { updatePassword };
