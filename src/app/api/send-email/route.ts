// app/api/send-email/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';


export async function POST(req: Request) {
	const resend = new Resend(process.env.RESEND_API_KEY);
	const { name, phoneNumber, email, message } = await req.json();

	const isDev = process.env.NODE_ENV === 'development';

	const sender = isDev ? 'onboarding@resend.dev' : 'noreply@mount-sinai-hospice.com';

	try {
		await resend.emails.send({
			from: sender,
			to: 'mahdi@mountsinaihospice.net',
			subject: 'Mount Sinai Hospice - Request',
			html: `
   <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Form Submission</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
      color: #333;
    }
    .email-container {
      width: 100%;
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
    .header {
      background-color: #604882;
      color: #ffffff;
      padding: 20px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 20px;
    }
    .content h4 {
      color: #003366;
      font-size: 18px;
      margin-bottom: 10px;
    }
    .content p {
      font-size: 16px;
      line-height: 1.5;
      margin: 5px 0;
    }
    .footer {
      background-color: #604882;
      color: #ffffff;
      padding: 10px;
      text-align: center;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>New Contact Form Submission</h1>
    </div>
    <div class="content">
      <h4>Name: ${name}</h4>
      <p><strong>Phone Number:</strong> ${phoneNumber}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    </div>
    <div class="footer">
      <p>&copy; 2025 Mount Sinai Hospice | All Rights Reserved</p>
    </div>
  </div>
</body>
</html>
      `,
		});

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ error });
	}
}
