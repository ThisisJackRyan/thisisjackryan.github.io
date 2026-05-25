import { JetBrains_Mono } from "next/font/google";
import Header from "./components/header";
import SectionIndicator from "./components/SectionIndicator";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Jack Ryan — Software Engineer",
  description:
    "Aspiring software engineer, part-time outdoor enthusiast, full-time student, lifetime tinkerer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <head>
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <Header />
        <SectionIndicator />
        {children}
      </body>
    </html>
  );
}
