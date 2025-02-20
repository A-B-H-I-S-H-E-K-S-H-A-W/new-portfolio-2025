import { Toaster } from "sonner";
import "./globals.css";
import { ThemeProvider } from "@/app/Provider";
import icon from "@/jsm-logo.png";

export const metadata = {
  title: "Abhishek's Portfolio",
  description: "Modern Portfolio",
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
