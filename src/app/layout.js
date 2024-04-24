import { Inter } from "next/font/google";
import "./global.css"
import { AuthProvider } from "./context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "cosmic commerce",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        {children}
        </AuthProvider>
   
        </body>
    </html>
  );
}
