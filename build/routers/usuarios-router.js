"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuariosRouter = void 0;
const express_1 = __importDefault(require("express"));
const usuario_1 = __importDefault(require("../models/usuario"));
exports.usuariosRouter = express_1.default.Router();
//Obtener usuarios
exports.usuariosRouter.get('/', (req, res) => {
    usuario_1.default.find({}, { _id: true, nombre: true })
        .then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => {
        res.send(error);
        res.end();
    });
});
