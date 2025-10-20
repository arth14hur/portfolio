// layout.tsx (pour App Router)
import { Space_Mono } from 'next/font/google';

const spaceMono = Space_Mono({ 
  weight: ['400', '700'], 
  subsets: ['latin'] 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={spaceMono.className}> {/* Applique la police au root */}
      <body>{children}</body>
    </html>
  );
}