import express, {Application, Request, Response}  from 'express';

const app: Application = express();

const port: number = 3001

app.get('/', (req: Request, res: Response) => {
    res.send('Backend  de whatsapp');
});

app.listen(port, function () {
    console.log(`Servidor levantado en el puerto ${port} !`)
});
