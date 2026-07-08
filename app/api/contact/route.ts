import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY no configurada");
      return NextResponse.json({ error: "Servicio de correo no configurado" }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Portafolio <onboarding@resend.dev>", // reemplaza por tu dominio verificado en Resend
      to: "david11duquev@gmail.com",
      replyTo: email,
      subject: `Nuevo mensaje de ${name} desde el portafolio`,
      text: `De: ${name} (${email})\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 });
  }
}
