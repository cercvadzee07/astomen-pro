import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Starfield from "@/components/Starfield";
import { ShopProvider } from "@/context/ShopContext";

export const metadata: Metadata = {
  title: "ASTROMAN - ასტრონომიული ტექნიკა და დეკორაცია",
  description: "ტელესკოპები, პროექტორები და კოსმოსური სანათები საქართველოში",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ka">
      <body className="min-h-screen flex flex-col font-sans text-slate-200 bg-[#070a12]">
        <ShopProvider>
          <Starfield />
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </ShopProvider>
      </body>
    </html>
  );
}
