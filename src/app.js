import express from "express";

import conectaNaBaseDeDados from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaBaseDeDados();

conexao.on("error", (error) => {
  console.error("erro de conexão.", error);
});

conexao.once("open", () => {
  console.log("Conexão com o banco de dados feita com sucesso!");
});

const app = express();

routes(app);

export default app;