import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Sujets proposés par le formulaire de contact
const subjectMapping: Record<string, string> = {
  alternance: "Alternance",
  freelance: "Projet freelance",
  autre: "Autre",
};

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(req: Request) {
  try {
    const { identity, email, subject, content, website } = await req.json();

    // Champ piège rempli : c'est un robot, on fait comme si tout s'était bien passé
    if (website) return NextResponse.json({ success: true });

    if (
      typeof identity !== "string" ||
      typeof email !== "string" ||
      typeof content !== "string" ||
      !identity.trim() ||
      !content.trim()
    ) {
      return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 });
    }
    if (!isEmail(email) || email.length > 200) {
      return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
    }
    if (identity.length > 120 || content.length > 5000) {
      return NextResponse.json({ error: "Message trop long." }, { status: 400 });
    }

    const readableSubject = subjectMapping[subject] ?? "Autre";

    const transporter = nodemailer.createTransport({
      host: "ssl0.ovh.net",
      port: 465,
      secure: true,
      auth: {
        user: process.env.AUTH_EMAIL_USER,
        pass: process.env.AUTH_EMAIL_PASS,
      },
    });

    // Toutes les saisies sont échappées avant d'être insérées dans le HTML
    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd;">
        <h2 style="margin-top: 0;">Nouveau message via le portfolio</h2>
        <p><strong>Sujet :</strong> ${escapeHtml(readableSubject)}</p>
        <p><strong>De :</strong> ${escapeHtml(identity)}</p>
        <p><strong>Email :</strong> ${escapeHtml(email)}</p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
        <p style="white-space: pre-line;">${escapeHtml(content)}</p>
      </div>
    `;

    await transporter.sendMail({
      from: "portfolio-nolhan-bilyj-contact@db-vtc-belfort.fr",
      to: "nolhanbil@gmail.com",
      replyTo: email,
      subject: `Portfolio — ${readableSubject} — ${identity.slice(0, 60)}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error instanceof Error ? error.message : error);
    return NextResponse.json({ error: "L'envoi a échoué." }, { status: 500 });
  }
}
