import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Providers from "@/lib/provider";
import Footer from "@/components/shared/Footer";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { TSession } from "@/types";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Md Minhajul Islam",
  description:
    "Welcome to My portFolio – Hey, this is Md Minhajul Islam. A Mern Stack Developer",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = (await getServerSession(authOptions)) as TSession;
  return (
    <Providers>
      <html lang="en">
        <body className={montserrat.className}>
          <Navbar session={session} />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </body>
      </html>
    </Providers>
  );
}
