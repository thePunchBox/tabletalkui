import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TableTalk AI - Turn Your Tables Into Conversations",
  description: "Chat with your CSV and Excel data using natural language. Get instant insights, visualizations, and answers from your spreadsheets with AI.",
  keywords: ["AI", "CSV", "Excel", "data analysis", "chat", "natural language", "spreadsheet"],
  authors: [{ name: "TableTalk AI" }],
  openGraph: {
    title: "TableTalk AI - Turn Your Tables Into Conversations",
    description: "Chat with your CSV and Excel data using natural language.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-bg-primary`}>
        {children}
      </body>
    </html>
  );
}
