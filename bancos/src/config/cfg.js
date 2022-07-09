const PROTO_PATH = "./listabancos.proto";

const grpc = require("@grpc/grpc-js");
const carregarProto = require("@grpc/proto-loader");

const definicao = carregarProto.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true,
});

const userProto = grpc.loadPackageDefinition(definicao).GerenciarBanco.service;

module.exports = userProto;