import { Resend } from 'resend';

export async function POST(req:any) {

  const { to, html } = await req.json()
  console.log("Request TO: " + to)

  const resend = new Resend(process.env.API_KEY_RESEND);

  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [to],
      subject: "FooFest 2024 - Booking",
      html: html
    });

    if (error) {
      console.log("Error: " + error.name)
      //console.log("To:" + to)
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.log("Fejl: " + error)
    return Response.json({ error }, { status: 500 });
  }
}