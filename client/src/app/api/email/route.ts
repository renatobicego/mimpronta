import { type NextRequest, NextResponse } from "next/server";

import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SEND_GRID_KEY as string);
export async function POST(request: NextRequest) {
  const { email, name, country, message } = await request.json();
  
  const msg = {
    to: "micaelagerbeno@mimpronta.com",
    from: "renatobicego@mimpronta.com",
    subject: "Solicitud de contacto: " + name,
    dynamicTemplateData: {
      message,
      name,
      country,
      email
    },
    templateId: "d-d50bdd5d98674c61ab7e441ebfd649b5"
  };
  try {
    await sgMail.send(msg);
    return NextResponse.json({ message: "Email sent" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}



