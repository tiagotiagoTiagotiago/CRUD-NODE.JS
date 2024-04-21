const db = require('../db');

async function revokeToken(id) {
  try {
    
    return { success: true, message: 'Token revogado com sucesso!' };
  } catch (error) {
    console.error('Erro ao revogar token:', error);
    return { success: false, message: 'Erro ao revogar token.' };
  }
}

module.exports = { revokeToken };
