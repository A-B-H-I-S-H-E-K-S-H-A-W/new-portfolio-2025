import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { userEmail } = req.body;
    const { resume } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const downloadCvObject = {
      to: process.env.GMAIL_USER,
      from: userEmail,
      subject: "Request for CV",
      text: `Dear Abhishek Shaw,

      I hope this message finds you well.

      I am very interested in learning more about your background and experiences, and I would greatly appreciate it if you could share your CV with me. Your expertise and achievements are of great interest to me, and I believe your CV would provide valuable insights.

      Thank you for your time and consideration.

      Best regards,

      ${userEmail}`,
    };

    const contactMeObject = {
      to: process.env.GMAIL_USER,
      from: userEmail,
      subject: "Collaboration Request",
      text: `Dear Abhishek Shaw,

      I hope this message finds you well.

      I am reaching out to express my interest in collaborating with you on potential projects. Your background and expertise are impressive, and I believe that working together could lead to exciting and valuable outcomes. Please let me know if you are open to discussing collaboration opportunities.

      Thank you for your time and consideration.

      Best regards,

      ${userEmail}`,
    };

    try {
      const info = await transporter.sendMail(
        resume === undefined ? downloadCvObject : contactMeObject
      );
      console.log("Email sent: " + info.response);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.log("Error details:", error);
      if (error.response && error.response.includes("Invalid login")) {
        res.status(500).json({
          message: "Failed to send email. Invalid login credentials.",
        });
      } else {
        res
          .status(500)
          .json({ message: "Failed to send email", error: error.toString() });
      }
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
