import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        <main className="max-w-2xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
