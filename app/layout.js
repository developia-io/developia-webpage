import Header from "@/components/header/page";
import "./globals.css";
import Footer from "@/components/footer/page";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Developia",
  description: "Next generation code, new generation start-up",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div>
          <Header />
          <div className="wrapper">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
