"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData) {
  // Extract values using the name attribute of the inputs
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Default free-tier sender
      to: "operation.a2vgroups@gmail.com", // Your actual inbox
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Message Details:</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Email sending failed:", error);
    return { success: false, error: "Failed to send email." };
  }
}
