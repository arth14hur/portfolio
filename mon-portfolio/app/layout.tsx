import "./globals.css";
import Header from "./layouts/Header";

export const metadata = {
  title: "Reality Matrix",
  description: "Next.js Portfolio - Matrix UI Experience",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="relative bg-black text-green-300 overflow-x-hidden">
        <Header />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
