const Banco = require("../model/banco");
const login_token = require("../middleware/login_token");

function listaTodosBancos(call, callback) {
    if (login_token(call)) {
        Banco.find((error, result) => {
            if (error) return callback(null, error);
            return callback(null, {bancos: result});
        });
    } else {
        return callback(new Error('Token não autenticado'), null);
    }
    
}

function adicionaBanco(call, callback) {
    if (login_token(call)) {
        Banco(call.request)
        .save()
        .then((result) => callback(null, result))
        .catch((err) => callback(null, err));
    } else {
        return callback(new Error('Token não autenticado'), null);
    }
}

function atualizaBanco(call, callback) {
    if (login_token(call)) {
        Banco.findByIdAndUpdate(call.request.id, call.request.Banco, {new: true})
        .then((result) => callback(null, result))
        .catch((err) => callback(err, null));
    } else {
        return callback(new Error('Token não autenticado'), null);
    }
}

const funcoes_grpc = {
    listaTodosBancos,
    adicionaBanco,
    atualizaBanco
}

module.exports = funcoes_grpc;