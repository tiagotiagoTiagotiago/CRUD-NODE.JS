const db = require('../db');

async function deleteUser(id) {
  try {
    const result = await db.remove(id);
    if (result.deletedCount === 1) {
      return { success: true, message: 'Usuário deletado com sucesso!' };
    } else {
      return { success: false, message: 'Usuário não encontrado ou não pôde ser deletado.' };
    }
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
    return { success: false, message: 'Erro ao deletar usuário.' };
  }
}

module.exports = { deleteUser };
