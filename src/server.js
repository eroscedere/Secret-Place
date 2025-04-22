const express = require("express");
const cors = require("cors");
const path = require("path");
const uploadRoutes = require("./routes/upload");
const fileRoutes = require("./routes/files");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/upload", uploadRoutes);
app.use("/file", fileRoutes);

// Middleware para servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, "../public")));

// Servir arquivos da pasta "uploads" (ajuste o caminho relativo)
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));  // Ajuste para o caminho correto

// Rota para renderizar o HTML principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
