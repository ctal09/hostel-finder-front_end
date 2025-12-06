import { Building2, Mail } from "lucide-react";
import Link from "next/link";

export default function CPFooter(){
    return <>
      <footer className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 text-white mt-16">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

              {/* Brand */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Building2 className="text-white" size={24} />
                  </div>
                  <h2 className="text-xl font-bold">Smart Hostel Finder</h2>
                </div>
                <p className="text-gray-400 mb-4 max-w-md">
                  Making hostel life better, one room at a time. Find your
                  perfect accommodation with our intelligent room allocation
                  system.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="#">Home</Link></li>
                  <li><Link href="#">Browse Rooms</Link></li>
                  <li><Link href="#">About Us</Link></li>
                  <li><Link href="#">Contact</Link></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="font-bold text-lg mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center"><Mail className="mr-2" size={18} /> <a href="mailto:admin@hostelfinder.com">admin@hostelfinder.com</a></li>
                  <li className="flex items-center"><span className="mr-2">📞</span> +1 (555) 123-4567</li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Smart Hostel Room Allocation. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Terms of Service</Link>
                <Link href="#">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </footer>
    </>
}