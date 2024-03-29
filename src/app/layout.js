import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "../components/layout/Header";
import { Main } from "../components/layout/Main";
import { Footer } from "../components/layout/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Keyword Alchemist",
  description: "Created by Nihad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
