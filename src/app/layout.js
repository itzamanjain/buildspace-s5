import { Inter } from "next/font/google";
import "./globals.css";



export const metadata = {
  title: "AI Diary",
  description: "Your Personal AI-Enhanced Diary !!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
