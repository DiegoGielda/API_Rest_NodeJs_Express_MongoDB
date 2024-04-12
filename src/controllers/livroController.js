import livro from "../models/Livro.js";

class LivroController {

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
    try {
      const novoLivro = await livro.create(req.body);
      res.status(201).json({ message: "criado com sucesso!", livro: novoLivro });

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
};

export default LivroController;