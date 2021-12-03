import express, {Application, Request, Response}  from 'express';
import Database from './modules/database';
import { usuariosRouter } from './routers/usuarios-router';
import cors from 'cors'; 

const port: number = 3001;
const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/usuarios', usuariosRouter);
app.use('/uploads',express.static('public'));

app.get('/', (req: Request, res: Response) => {
    res.send('Backend  de whatsapp');
});

app.listen(port, function () {
    const database = new Database();
    console.log(`Servidor levantado en el puerto ${port} !`)
});
