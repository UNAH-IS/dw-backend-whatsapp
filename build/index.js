"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./modules/database"));
const usuarios_router_1 = require("./routers/usuarios-router");
const cors_1 = __importDefault(require("cors"));
const port = 3001;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/usuarios', usuarios_router_1.usuariosRouter);
app.use('/public', express_1.default.static('public'));
app.get('/', (req, res) => {
    res.send('Backend  de whatsapp');
});
app.listen(port, function () {
    const database = new database_1.default();
    console.log(`Servidor levantado en el puerto ${port} !`);
});
