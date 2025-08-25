/* eslint-disable no-undef */
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// rota
app.post("/api/send", async (req, res) => {
  const { email, telefone, mensagem } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_SEND,
        pass: process.env.SENHA_SEND, // senha de app do Gmail
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_SEND,
      replyTo: email,
      to: process.env.EMAIL_RECEBIDO,
      subject: "Novo contato do portfólio",
      text: `Email: ${email}\nWhatsapp: ${telefone}\nMensagem: ${mensagem}`,
    });

    res.status(200).json({ message: "Email enviado com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao enviar email." });
  }
});

// ✅ só liga o servidor localmente
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

export default app; // ✅ exporta para a Vercel usar
