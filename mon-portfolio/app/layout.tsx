// Dans app/layout.tsx
import "./globals.css";
import Header from "./layouts/Header";
import { Space_Mono } from 'next/font/google'; // Importe la police ici

// Configure la police
const spaceMono = Space_Mono({ 
  weight: ['400', '700'], 
  subsets: ['latin'],
  variable: '--font-space-mono' // Optionnel mais pratique: définit une variable CSS
});

export const metadata = {
  title: "Reality Matrix", // Tu peux affiner ce titre par page si besoin
  description: "Portfolio d'Arthur Daguier",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Applique la classe de la police à l'élément html
    <html lang="fr" className={spaceMono.className}> 
      {/* Supprime bg-black et text-green-300 d'ici */}
      <body className="relative overflow-x-hidden"> 
        {/* Header est ok, mais assure-toi qu'il n'impose pas une police différente */}
        <Header /> 
        {/* pt-20 est ok si ton header a une hauteur fixe */}
        <main className="pt-20">{children}</main> 
      </body>
    </html>
  );
}