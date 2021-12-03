import express, {Application, Request, Response, Router}  from 'express';
import usuario from '../models/usuario';
import mongoose from 'mongoose';

export const usuariosRouter: Router = express.Router();

//Obtener usuarios
usuariosRouter.get('/', (req: Request, res: Response) => {
    usuario.find({},{_id: true, nombre:true, imagen: true})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});