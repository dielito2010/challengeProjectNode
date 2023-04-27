const express = require("express");
const cors = require("cors");
const { conectandoDB } = require("./db/dbHelper");

const userRouter = require("./user/user.router");

const port = process.env.PORT || 3001;

async function main() {
  await conectandoDB();
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.get("/", (res) => {
    res.redirect("https://danielribeiro.dev.br/");
  });

  app.use("/user", userRouter);
  app.use("/address", userRouter);

  app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port} \n Para cancelar: ctrl+c`);
  });
}

main().catch((err) => console.error("Um erro inesperado ocorreu. \n", err));