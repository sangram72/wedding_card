import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sangram & Tiasha | Wedding Invitation",
  description:
    "Turn the pages of Sangram Nandi and Tiasha Roy's wedding invitation. Wedding: 9 March 2027. Reception: 11 March 2027.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
