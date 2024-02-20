import { Inter } from "next/font/google";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learning NextJS",
  description: "Learning next.js version 14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}
