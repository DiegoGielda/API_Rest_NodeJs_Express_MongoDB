import mongoose from "mongoose";


async function conectaNaBaseDeDados() {
  mongoose.connect(process.env.BD_CONNECTION_STRING);

  return mongoose.connection;
};

export default conectaNaBaseDeDados;