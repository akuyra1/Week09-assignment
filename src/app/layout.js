import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

import Header from "./components/Header";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Snitch Socials",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <main className="container">
            <div className="flex items-start justify-center min-h-screen">
              <div className="mt-20 text-5xl">
                {children}

              </div>
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
