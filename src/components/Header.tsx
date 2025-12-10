
import { Building2, Home, Info, Mail, Menu } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
 const { data:session, status} = useSession();
 console.log(session);
console.log(status);

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                <Building2 className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Smart Hostel Finder
                </h1>
                <p className="text-xs text-gray-500">
                  Your Perfect Room Awaits
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <a
                href="/"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-blue-50 transition text-gray-700 hover:text-blue-600 font-medium"
              >
                <Home size={18} />
                <span>Home</span>
              </a>
              <a
                href="#rooms"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-blue-50 transition text-gray-700 hover:text-blue-600 font-medium"
              >
                <Building2 size={18} />
                <span>Rooms</span>
              </a>
              <a
                href="#about"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-blue-50 transition text-gray-700 hover:text-blue-600 font-medium"
              >
                <Info size={18} />
                <span>About</span>
              </a>
              <a
                href="#contact"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-blue-50 transition text-gray-700 hover:text-blue-600 font-medium"
              >
                <Mail size={18} />
                <span>Contact</span>
              </a>
              <Link
                href="/auth/login"
                className="ml-4 px-6 py-2 bg-linear-to-r from-blue-600 to-purple-600 
             text-white rounded-lg font-semibold hover:shadow-lg 
             transition transform hover:scale-105"
              >
                Get Started
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition">
              <Menu size={24} className="text-gray-700" />
            </button>
          </div>

          {/* Mobile Navigation - Hidden by default, would need JS to toggle */}
          <div className="hidden md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <nav className="flex flex-col space-y-2">
              <a
                href="#"
                className="flex items-center space-x-2 px-4 py-3 rounded-lg hover:bg-blue-50 transition text-gray-700 hover:text-blue-600 font-medium"
              >
                <Home size={18} />
                <span>Home</span>
              </a>
              <a
                href="#rooms"
                className="flex items-center space-x-2 px-4 py-3 rounded-lg hover:bg-blue-50 transition text-gray-700 hover:text-blue-600 font-medium"
              >
                <Building2 size={18} />
                <span>Rooms</span>
              </a>
              <a
                href="#about"
                className="flex items-center space-x-2 px-4 py-3 rounded-lg hover:bg-blue-50 transition text-gray-700 hover:text-blue-600 font-medium"
              >
                <Info size={18} />
                <span>About</span>
              </a>
              <a
                href="#contact"
                className="flex items-center space-x-2 px-4 py-3 rounded-lg hover:bg-blue-50 transition text-gray-700 hover:text-blue-600 font-medium"
              >
                <Mail size={18} />
                <span>Contact</span>
              </a>
              <button className="px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition">
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
