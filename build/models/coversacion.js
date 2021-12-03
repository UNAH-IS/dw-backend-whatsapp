"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const esquema = new mongoose_1.default.Schema({
    emisor: mongoose_1.default.Schema.Types.ObjectId,
    receptor: mongoose_1.default.Schema.Types.ObjectId,
    ultimoMensaje: String,
    fechaConversacion: String,
    mensajes: Array
});
exports.default = mongoose_1.default.model('conversaciones', esquema);
