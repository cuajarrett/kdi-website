import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();

  console.log(body);

  const { name, email, phone, projectAddress, inquiry, showroom, message } =
    body;

  // Server-side validation
  const errors = {};
  if (!name || name.trim().length < 3) {
    errors.name = "Name must be at least 3 characters long.";
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }
  if (phone && !/^\d{10,15}$/.test(phone)) {
    errors.phone = "Phone number must be 10-15 digits long.";
  }
  if (!inquiry) {
    errors.inquiry = "Inquiry type is required.";
  }
  if (!showroom) {
    errors.showroom = "Showroom selection is required.";
  }
  if (!message || message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters long.";
  }

  // Return validation errors
  if (Object.keys(errors).length > 0) {
    return new Response(JSON.stringify({ success: false, errors }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Nodemailer setup using environment variables
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST, // SMTP host
    port: parseInt(process.env.EMAIL_PORT, 10), // SMTP port
    auth: {
      user: process.env.EMAIL_USER, // SMTP username
      pass: process.env.EMAIL_PASS, // SMTP password
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Use your email as the sender
      to: "your-email@example.com", // Replace with your destination email
      subject: "New Contact Form Submission",
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Project Address:</strong> ${projectAddress || "N/A"}</p>
        <p><strong>Inquiry About:</strong> ${inquiry}</p>
        <p><strong>Showroom:</strong> ${showroom}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to send email. Please try again later.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
