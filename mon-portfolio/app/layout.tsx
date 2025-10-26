
import "./globals.css";
import Header from "./layouts/Header";
import { Space_Mono } from 'next/font/google';

const spaceMono = Space_Mono({ 
  weight: ['400', '700'], 
  subsets: ['latin'],
  variable: '--font-space-mono'
});

export const metadata = {
  title: "Reality Matrix",
  description: "Portfolio d'Arthur Daguier",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={spaceMono.className}> 
      <body className="relative overflow-x-hidden"> 
        <Header /> 
        <main className="pt-20">{children}</main> 
      </body>
    </html>
  );
}