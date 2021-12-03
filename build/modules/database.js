"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// var mongoose = require('mongoose');
const mongoose_1 = __importDefault(require("mongoose"));
const servidor = 'localhost:27017';
const db = 'whatsapp';
class Database {
    constructor() {
        //Promesas
        mongoose_1.default.connect(`mongodb://${servidor}/${db}`)
            .then(() => {
            console.log('Se conecto a mongo');
        }).catch((error) => {
            console.log(error);
        });
    }
}
exports.default = Database;
