const express = require("express");
const path = require("path");

const router = express.Router();
const uploadDir = path.join(__dirname, "../../uploads");

// Servir arquivos
router.get("/:filename", (req, res) => {
  const filePath = path.join(uploadDir, req.params.filename);
  res.sendFile(filePath, (err) => {
    if (err) res.status(404).json({ message: "Arquivo não encontrado." });
  });
});

// Baixar arquivos
router.get("/download/:filename", (req, res) => {
  const filePath = path.join(uploadDir, req.params.filename);
  res.download(filePath, (err) => {
    if (err) res.status(404).json({ message: "Arquivo não encontrado." });
  });
});

module.exports = router;
