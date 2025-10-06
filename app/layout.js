export const metadata = { title: "Instituto Piaget — Montessori", description: "Institución educativa con enfoque Montessori." };
import "./../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900">
        <div className="min-h-screen flex flex-col">
          <Navbar/>
          <main className="flex-1">{children}</main>
          <Footer/>
          <FloatingButtons/>
        </div>
      </body>
    </html>
  );
}
