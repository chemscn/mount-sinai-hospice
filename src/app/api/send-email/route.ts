// app/api/send-email/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';


export async function POST(req: Request) {
	const resend = new Resend(process.env.RESEND_API_KEY);
	const { name, phoneNumber, email, message } = await req.json();

	const isDev = process.env.NODE_ENV === 'development';

	const sender = isDev ? 'onboarding@resend.dev' : email;

	try {
		await resend.emails.send({
			from: sender,
			to: 'drkarm123@gmail.com',
			subject: 'Mount Sinai Hospice - Request',
			html: `
      <h4>Name: ${name}</h4>
      <p>Phone Number: ${phoneNumber}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
      `,
		});

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ error });
	}
}
