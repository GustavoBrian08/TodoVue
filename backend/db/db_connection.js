const mongoose = require('mongoose');
require('dotenv').config();

const main = async () => {
    const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@todo-simples.ghllhil.mongodb.net/TodoSimples?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(uri);

        console.log('Conexão ao banco de dados bem sucedida!\n');
    } catch (error) {
        console.log(`Deu Erro: ${error}\n`);
    }
}

module.exports = main;