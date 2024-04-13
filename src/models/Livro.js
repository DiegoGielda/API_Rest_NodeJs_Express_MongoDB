import mongoose from "mongoose";
import { autorShema } from "./Autor.js";

const livroShema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  titulo: { type: String, required: true },
  editora: { type: String },
  preco: { type: Number },
  paginas: { type: Number },
  
  // Utilizando o formato embedding.
  autor: autorShema

  // Utilizando o formato referencing.
  // autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},

}, { versionKey: false });

const livro = mongoose.model("livros", livroShema);

export default livro;