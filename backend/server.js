import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send", async (req, res) => {
  const { email, telefone, mensagem } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        // eslint-disable-next-line no-undef
        user: process.env.EMAIL_SEND,
        // eslint-disable-next-line no-undef
        pass: process.env.SENHA_SEND, // senha de app do Gmail no .env
      },
    });

    await transporter.sendMail({
      // eslint-disable-next-line no-undef
      from: process.env.EMAIL_SEND,
      replyTo: email,
      // eslint-disable-next-line no-undef
      to: process.env.EMAIL_RECEBIDO,
      subject: "Novo contato do portfólio",
      text: `Email: ${email}\nWhatsapp: ${telefone}\nMensagem: ${mensagem}`,
    });

    res.status(200).send("Email enviado com sucesso!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao enviar email.");
  }
});

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});
