import type { Metadata } from "next";
import { Noto_Sans_Georgian } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Starfield from "@/components/Starfield";
import ShopOverlays from "@/components/ShopOverlays";
import Toaster from "@/components/ui/Toaster";
import { ShopProvider } from "@/context/ShopContext";

const georgian = Noto_Sans_Georgian({
  subsets: ["georgian", "latin"],
  variable: "--font-georgian",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://astroman.ge"),
  title: {
    default: "ASTROMAN - ასტრონომიული ტექნიკა და დეკორაცია",
    template: "%s | ASTROMAN",
  },
  description: "ტელესკოპები, პროექტორები და კოსმოსური სანათები საქართველოში",
  openGraph: {
    siteName: "Astroman",
    locale: "ka_GE",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ka" className={georgian.variable}>
      <body className="flex min-h-screen flex-col bg-[#070a12] text-slate-200">
        <ShopProvider>
          <Starfield />
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer />
          {/* cart drawer, quick view and compare — shared by every page */}
          <ShopOverlays />
          <Toaster />
        </ShopProvider>
      </body>
    </html>
  );
}
