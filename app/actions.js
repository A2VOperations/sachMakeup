// Web3Forms integration to support real email delivery on static exported sites (output: 'export')
// Static hosts (S3, GitHub Pages, Netlify static, etc.) do not support server-side code like Resend.
// Web3Forms is completely free and routes form submissions directly to your inbox from the client.

// Loads key from .env file during the build process
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

/**
 * Sends Contact Form submissions to your inbox via Web3Forms
 */
export async function sendContactEmail(formData) {
  if (!WEB3FORMS_ACCESS_KEY) {
    // If the key is not set yet, run in simulated mode so the UI behaves correctly
    console.warn("Web3Forms Access Key is not configured. Running in simulated mode.");
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { success: true };
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New Contact Form: ${formData.get("firstName")} ${formData.get("lastName")}`,
        from_name: "Sach Makeovers (Contact)",
        name: `${formData.get("firstName")} ${formData.get("lastName")}`,
        email: formData.get("email"),
        phone: formData.get("phone") || "Not provided",
        message: formData.get("message"),
      }),
    });

    const data = await response.json();
    return { success: data.success, error: data.message };
  } catch (error) {
    console.error("Web3Forms contact form error:", error);
    return { success: false, error: "Failed to send email. Please try again later." };
  }
}

/**
 * Sends Course Enquiry Form submissions via Web3Forms
 */
export async function sendEnquiryEmail(formData) {
  if (!WEB3FORMS_ACCESS_KEY) {
    console.warn("Web3Forms Access Key is not configured. Running in simulated mode.");
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { success: true };
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `Course Enquiry: ${formData.get("courseTitle")} - from ${formData.get("name")}`,
        from_name: "Sach Makeovers (Enquiry)",
        course: formData.get("courseTitle"),
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone") || "Not provided",
        message: formData.get("message"),
      }),
    });

    const data = await response.json();
    return { success: data.success, error: data.message };
  } catch (error) {
    console.error("Web3Forms enquiry form error:", error);
    return { success: false, error: "Failed to send enquiry. Please try again later." };
  }
}

/**
 * Sends Appointment Form submissions via Web3Forms
 */
export async function sendAppointmentEmail(formData) {
  if (!WEB3FORMS_ACCESS_KEY) {
    console.warn("Web3Forms Access Key is not configured. Running in simulated mode.");
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { success: true };
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New Appointment Request from ${formData.get("name")}`,
        from_name: "Sach Makeovers (Appointment)",
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone") || "Not provided",
        date: formData.get("date"),
        timings: formData.get("timings"),
        message: formData.get("message"),
      }),
    });

    const data = await response.json();
    return { success: data.success, error: data.message };
  } catch (error) {
    console.error("Web3Forms appointment form error:", error);
    return { success: false, error: "Failed to book appointment. Please try again later." };
  }
}
