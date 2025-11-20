// app/layout.tsx
import './globals.css'
import { Home, Building2, Info, Mail, Menu, X } from 'lucide-react'

export const metadata = {
  title: 'Smart Hostel Finder - Find Your Perfect Room',
  description: 'Discover and explore hostel room allocations with our intelligent room finder system',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 font-sans antialiased">
        {/* Enhanced Header */}
        <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              {/* Logo Section */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                  <Building2 className="text-white" size={24} />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Smart Hostel Finder
                  </h1>
                  <p className="text-xs text-gray-500">Your Perfect Room Awaits</p>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-1">
                <a 
                  href="#" 
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
                <button className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105">
                  Get Started
                </button>
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
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition">
                  Get Started
                </button>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Enhanced Footer */}
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white mt-16">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {/* Brand Section */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Building2 className="text-white" size={24} />
                  </div>
                  <h2 className="text-xl font-bold">Smart Hostel Finder</h2>
                </div>
                <p className="text-gray-400 mb-4 max-w-md">
                  Making hostel life better, one room at a time. Find your perfect accommodation with our intelligent room allocation system.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                    <span className="sr-only">Facebook</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
                  <li><a href="#rooms" className="text-gray-400 hover:text-white transition">Browse Rooms</a></li>
                  <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="font-bold text-lg mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start">
                    <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                    <a href="mailto:admin@hostelfinder.com" className="hover:text-white transition">
                      admin@hostelfinder.com
                    </a>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+1 (555) 123-4567</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Smart Hostel Room Allocation. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition">Privacy Policy</a>
                <a href="#" className="hover:text-white transition">Terms of Service</a>
                <a href="#" className="hover:text-white transition">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}