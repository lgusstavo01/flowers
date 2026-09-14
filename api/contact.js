// Função serverless (Vercel) que recebe o formulário de contato e envia
// o e-mail via Resend. A RESEND_API_KEY fica só aqui no servidor — nunca
// é exposta no bundle do front-end.
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const DESTINATION_EMAIL = "maluflores0001@gmail.com";

// Evita que o conteúdo digitado pelo visitante quebre o HTML do e-mail.
function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Método não permitido." });
  }

  const { name, email, phone, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Preencha nome, e-mail e mensagem." });
  }

  try {
    const { error } = await resend.emails.send({
      from: "Malu Flores <onboarding@resend.dev>",
      to: DESTINATION_EMAIL,
      replyTo: email,
      subject: `Nova mensagem de ${name} — Site Malu Flores`,
      html: `
        <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefone:</strong> ${escapeHtml(phone || "Não informado")}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Erro do Resend:", error);
      return res
        .status(502)
        .json({ error: "Não foi possível enviar a mensagem. Tente novamente." });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Erro ao enviar e-mail via Resend:", error);
    return res
      .status(500)
      .json({ error: "Não foi possível enviar a mensagem. Tente novamente." });
  }
}
