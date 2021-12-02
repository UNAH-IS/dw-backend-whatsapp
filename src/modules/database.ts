// var mongoose = require('mongoose');
import mongoose from 'mongoose';

const servidor = 'localhost:27017';
const db = 'spotify';

class Database{
    constructor(){
        //Promesas
        mongoose.connect(`mongodb://${servidor}/${db}`)
        .then(()=>{
            console.log('Se conecto a mongo');
        }).catch((error)=>{
            console.log(error);
        });
    }
}

// module.exports = new Database();