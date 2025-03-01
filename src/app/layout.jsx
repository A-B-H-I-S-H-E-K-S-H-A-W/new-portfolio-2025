import { Toaster } from "sonner";
import "./globals.css";
import { ThemeProvider } from "@/app/Provider";
import icon from "@/jsm-logo.png";

export const metadata = {
  title: "Abhishek Shaw - Full Stack Web Developer Portfolio",
  keywords:
    "full stack developer, web development portfolio, Abhishek Shaw, front-end, back-end, web, website, contact, nextjs, website making, portfolio website, modern website, web animations",
  description:
    "Explore the diverse portfolio of Abhishek Shaw, a skilled full stack web developer. Discover his creative and user-friendly solutions across front-end and back-end technologies.",
  robots: "noindex",
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
