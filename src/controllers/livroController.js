import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {

  /*
  Utilizando o metodo por referencia deve utilizar o populate para "popular"
    o campo autor
  
  static async listarLivros (req, res) {
    try {
      const listaLivros = await livro.find({}).populate("autor").exec();
      res.status(200).json(listaLivros);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  }; 
  */

  static async listarLivros(req, res) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha na requisição.` })
    };
  };

  static async listarLivroPorID(req, res) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);
      res.status(200).json(livroEncontrado);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha na requisição do livro.` });
    };
  };

  static async cadastrarLivro(req, res) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
      const livroCriado = await livro.create(livroCompleto);
      res.status(201).json({ message: "criado com sucesso!", livro: livroCriado });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao cadastrar livro.` });
    };
  };

  static async atualizarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "livro atualizado!" })
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha na atualização.` });
    };
  };

  static async deletarLivroPorId(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({ message: "livro deletado!" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha na deleção.` });
    }
  };

  static async listarLivrosPorEditora(req, res) {
    try {
      const editora = req.query.editora;
      const livrosPorEditora = await livro.find({ editora: editora });
      res.status(200).json(livrosPorEditora);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao localizar livros por editora` });
    };
  };

};

export default LivroController;