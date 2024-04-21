const bcrypt = require('bcrypt');
const db = require('../db');

const PASSWORD_MIN_LENGTH = 8;

async function createUser(user, password) {
    try {
        if (!user || !password) {
            return { success: false, message: "O campo 'USUÁRIO' ou 'SENHA' está vazio." };
        }

        const validationResult = validatePassword(password);
        if (!validationResult.success) {
            return validationResult;
        }

        const existingUser = await db.findOneByUsername(user);
        if (existingUser) {
            return { success: false, message: "Usuário já existe." };
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await db.insert({ username: user, password: hashedPassword });
        
        return { success: true, message: "Usuário criado com sucesso!" };
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        return { success: false, message: "Erro ao criar usuário." };
    }
}

function validatePassword(password) {
    if (password.length < PASSWORD_MIN_LENGTH) {
        return { success: false, message: "A senha deve ter pelo menos 8 caracteres." };
    }
    if (!/[a-z]/.test(password)) {
        return { success: false, message: "A senha tem que conter 1 letra maiuscula, 1 caracter especial e 1 numero" };
    }
    if (!/[A-Z]/.test(password)) {
        return { success: false, message: "A senha tem que conter 1 letra maiuscula, 1 caracter especial e 1 numero" };
    }
    if (!/[0-9]/.test(password)) {
        return { success: false, message: "A senha tem que conter 1 letra maiuscula, 1 caracter especial e 1 numero" };
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return { success: false, message: "A senha tem que conter 1 letra maiuscula, 1 caracter especial e 1 numero" };
    }
    return { success: true, message: "Senha válida." };
}

module.exports = { createUser, validatePassword };
