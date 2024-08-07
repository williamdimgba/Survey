import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aronia-holybasil-survey",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center min-h-screen">
        <div className="w-full max-w-[350px] sm:max-w-[600px] m-4 flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}
