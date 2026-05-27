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

export async function sendEnquiryEmail(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");
  const courseTitle = formData.get("courseTitle");

  try {
    const data = await resend.emails.send({
      from: "Course Enquiry <onboarding@resend.dev>",
      to: "operation.a2vgroups@gmail.com",
      subject: `New Course Enquiry for ${courseTitle} from ${name}`,
      html: `
        <h2>New Course Enquiry Details:</h2>
        <p><strong>Course:</strong> ${courseTitle}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Enquiry sending failed:", error);
    return { success: false, error: "Failed to send enquiry." };
  }
}

export async function sendAppointmentEmail(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const date = formData.get("date");
  const timings = formData.get("timings");
  const message = formData.get("message");

  try {
    const data = await resend.emails.send({
      from: "Appointment Booking <onboarding@resend.dev>",
      to: "operation.a2vgroups@gmail.com",
      subject: `New Appointment Booking from ${name}`,
      html: `
        <h2>New Appointment Booking Details:</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Timings:</strong> ${timings}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Appointment email sending failed:", error);
    return { success: false, error: "Failed to send appointment request." };
  }
}


