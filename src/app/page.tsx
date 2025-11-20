import { Building2, Users, Bed, Mail, CheckCircle, MapPin } from 'lucide-react';
import RoomCard from '@/components/RoomCard';
import FeatureCard from '@/components/FeatureCard';


export default function HomePage() {

const rooms = [
    {
      block: "Block A",
      roomNumber: "101",
      type: "2-Sharing",
      availableSeats: 1,
      location: "Near Library",
      gradientFrom: "from-blue-400",
      gradientTo: "to-blue-600",
      isAvailable: true
    },
    {
      block: "Block B",
      roomNumber: "202",
      type: "3-Sharing",
      availableSeats: 2,
      location: "Near Cafeteria",
      gradientFrom: "from-purple-400",
      gradientTo: "to-purple-600",
      isAvailable: true
    },
    {
      block: "Block C",
      roomNumber: "303",
      type: "Single",
      availableSeats: 0,
      location: "Premium Block",
      gradientFrom: "from-gray-400",
      gradientTo: "to-gray-600",
      isAvailable: false
    }
  ];

  // Features data
  const features = [
    {
      icon: Building2,
      title: "Multiple Blocks",
      description: "Choose from various hostel blocks strategically located across campus",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Users,
      title: "Flexible Sharing",
      description: "Single, 2-sharing, and 3-sharing options to match your lifestyle",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: CheckCircle,
      title: "Real-time Updates",
      description: "Live availability status helps you make quick decisions",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    }
  ];




  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)'
        }}></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-white bg-opacity-20 rounded-full backdrop-blur-sm">
            <span className="text-sm font-semibold">🏠 Your Perfect Room Awaits</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-yellow-300">Smart Hostel Finder</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-blue-100">
            Discover your ideal living space with our intelligent room allocation system. Find comfort, convenience, and community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition transform hover:scale-105 shadow-lg">
              Browse Rooms
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-50 to-transparent"></div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </section>

        {/* Rooms Section */}
        <section id="rooms">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Available Rooms
            </h2>
            <p className="text-gray-600 text-lg">Browse through our carefully curated selection of rooms</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <RoomCard key={index} {...room} />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-gradient-to-r from-white to-blue-50 rounded-2xl p-10 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About This Project
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Smart Hostel Room Allocation revolutionizes hostel management with cutting-edge technology. Our platform provides a seamless public dashboard showcasing room availability, types, and amenities in real-time.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Built with advanced algorithms, we're shaping the future of automated student accommodation allocation, making hostel life better for everyone.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Real-time room availability tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Smart allocation algorithms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>User-friendly dashboard interface</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Comprehensive room information</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-10 shadow-xl text-white text-center">
          <Mail size={48} className="mx-auto mb-4 text-yellow-300" />
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl mb-6 text-indigo-100">
            Have questions? Our hostel administration team is here to help!
          </p>
          <a 
            href="mailto:admin@hostelfinder.com" 
            className="inline-block px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition transform hover:scale-105 shadow-lg"
          >
            admin@dulal.com
          </a>
        </section>
      </div>

    </div>
  );
}