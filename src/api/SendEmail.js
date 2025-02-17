import nodemailer from "nodemailer";

export default async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    // Use Nodemailer to send the email
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "eztodebug@gmail.com",
        pass: "abhishek@2002",
      },
    });

    let mailOptions = {
      from: email,
      to: "eztodebug@gmail.com",
      subject: "CV Download Request",
      text: `I hope this message finds you well. I am writing to express my interest in obtaining a copy of the CV. Please find my email address below for your reference: <br/>
              Email: ${email} <br/>
              Thank you for your time and consideration. <br/>
              Best regards`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    return res.status(500).json({ error: "Error sending email" });
  }
};
