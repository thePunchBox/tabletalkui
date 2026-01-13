import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
