import Navbar from "../Navbar";
import Footer from "../pages/Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <Footer />
    </div>
  );
}
