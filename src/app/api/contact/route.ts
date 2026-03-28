import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, projectType, message } = body;

    // Basic validation
    if (!name || !name.trim()) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }

    if (!phone || !phone.trim()) {
      return NextResponse.json({ error: "Phone number is required." }, { status: 400 });
    }

    if (!email || !email.trim()) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    // Simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    if (!projectType || !projectType.trim()) {
      return NextResponse.json({ error: "Project type is required." }, { status: 400 });
    }

    if (!message || !message.trim()) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    // TODO: Add email sending logic here.
    // Options include:
    //   - Resend (resend.com) — simple API, great Next.js integration
    //   - SendGrid (@sendgrid/mail)
    //   - Nodemailer with SMTP
    //   - AWS SES
    //
    // Example with Resend:
    //   import { Resend } from "resend";
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({
    //     from: "contact@bcss702.com",
    //     to: "info@bcss702.com",
    //     subject: `New Contact Form: ${projectType} — ${name}`,
    //     text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nProject Type: ${projectType}\nMessage: ${message}`,
    //   });

    console.log("Contact form submission:", {
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      projectType: projectType.trim(),
      message: message.trim(),
    });

    return NextResponse.json(
      { success: true, message: "Your message has been received. We'll be in touch soon!" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request. Please try again." },
      { status: 400 }
    );
  }
}
