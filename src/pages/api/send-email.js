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
      to: userEmail,
      from: process.env.GMAIL_USER,
      subject: "Hello from Download CV",
      text: `User email: ${userEmail}`,
    };

    const ContactMe = {
      to: userEmail,
      from: process.env.GMAIL_USER,
      subject: "Hello from Conatct",
      text: `User email: ${userEmail}`,
    };

    try {
      const info = await transporter.sendMail(
        resume === undefined ? downloadCvObject : ContactMe
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
