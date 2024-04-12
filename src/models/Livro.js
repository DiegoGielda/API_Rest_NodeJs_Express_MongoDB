import mongoose from "mongoose";

const livroShema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  titulo: { type: String, required: true },
  editora: { type: String },
  preco: { type: Number },
  paginas: { type: Number }
}, { versionKey: false });

const livro = mongoose.model("livros", livroShema);

export default livro;