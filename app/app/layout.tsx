import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "VidLive",
//   description: "Chat with strangers",
// };
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff"
};
export const metadata: Metadata = {
  title: "VidLive - Anonymous Connections",
  description: "VidLive provides a platform for anonymous online interactions. Meet new people, chat, and connect without revealing your identity.",
  keywords: ["anonymous chat", "online connections", "meet strangers", "secure chat", "random chat", "private conversations", "chat without login"],
  metadataBase: new URL('https://VidLive.example.com'),
  robots: "index, follow, cache",
  alternates: {
    canonical: 'https://VidLive.vercel.app'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      
      <body className={`bg-gradient-to-r from-gray-600 via-zinc-800 to-slate-900 sm:overflow-hidden overflow-auto  ${inter.className}`}>{children}

      <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "VidLive - Anonymous Connections",
        url: "https://VidLive.vercel.app",
        description: "VidLive provides a platform for anonymous online interactions. Meet new people, chat, and connect without revealing your identity.",
      }),
    }}
  />
      </body>
    </html>
  );
}
