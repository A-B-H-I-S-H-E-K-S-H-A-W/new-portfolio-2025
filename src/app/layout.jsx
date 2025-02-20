import { Toaster } from "sonner";
import "./globals.css";
import { ThemeProvider } from "@/app/Provider";
import icon from "@/jsm-logo.png";

export const metadata = {
  title: "Abhishek's Portfolio",
  description:
    "Hello! I'm Abhishek Shaw, a passionate and dedicated Full Stack Developer with a strong foundation in both front-end and back-end technologies. With extensive experience in creating dynamic, high-performance web applications, I thrive on turning complex problems into elegant, user-friendly solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href={icon.src} sizes="any" />
      </head>
      <body className={""}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
