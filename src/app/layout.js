import { Inter } from "next/font/google";
import "./globals.css";
import TransitonProvider from "@/components/transitonProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Madhavan's Portfolio",
  description: "Karthik's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <TransitonProvider>
        {children}
       </TransitonProvider>
      </body>
    </html>
  );
}
