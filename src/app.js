import express from "express";

const app = express();

app.use(express.json());

const livros = [
  {
    id: 1,
    titulo: "Aprendendo HTTP",
  },
  {
    id: 2,
    titulo: "Aprendendo Node.js",
  },
];

function GetIndexLivro(id) {
  return livros.findIndex((livro) => {
    return livro.id === Number(id);
  });
};

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
  const index = GetIndexLivro(req.params.id);
  res.status(200).json(livros[index]);
});

app.put("/livros/:id", (req, res) => {
  const index = GetIndexLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
  const index = GetIndexLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("Livro removido com sucesso!");
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso.");
});

export default app;