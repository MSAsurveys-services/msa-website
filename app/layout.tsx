import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MSA Surveys & Services | Global Maritime & Port Operations",
  description: "Leading marine surveying, container cargo inspection, and port operations across our African network.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Professional Navigation Bar */}
        <nav className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              
              {/* Logo Area */}
              <div className="flex-shrink-0 flex items-center space-x-3">
                <a href="/" className="flex items-center space-x-2">
                  {/* Replace with your logo image path if you have one, or text logo */}
                  <div className="bg-blue-600 text-white font-extrabold px-3 py-2 rounded text-lg tracking-wider">
                    MSA
                  </div>
                  <span className="font-bold text-lg tracking-tight">Surveys & Services</span>
                </a>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex space-x-6 items-center">
                <a href="/" className="hover:text-blue-400 transition-colors font-medium">Home</a>
                <a href="/about" className="hover:text-blue-400 transition-colors font-medium">About</a>
                <a href="/services" className="hover:text-blue-400 transition-colors font-medium">Services</a>
                
                {/* Gallery Link */}
                <a href="/gallery" className="hover:text-blue-400 transition-colors font-medium">Gallery</a>

                {/* Ports & Countries Menu / Link */}
                <a href="/ports" className="bg-blue-600/20 border border-blue-500 text-blue-300 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-all font-medium">
                  Ports & Countries (42 Ports)
                </a>

                <a href="/contact" className="hover:text-blue-400 transition-colors font-medium">Contact</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <div className="min-h-screen flex flex-col justify-between">
          {children}
        </div>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm border-t border-slate-800">
          <p>&copy; {new Date().getFullYear()} MSA Surveys & Services. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}