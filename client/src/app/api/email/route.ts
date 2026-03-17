import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { email, name, country, message } = await request.json();

  try {
    await resend.emails.send({
      to: "micaelagerbeno@mimpronta.com",
      from: "renatobicego@mimpronta.com",
      subject: "Solicitud de contacto: " + name,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>País:</strong> ${country}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    });
    return NextResponse.json({ message: "Email sent" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
