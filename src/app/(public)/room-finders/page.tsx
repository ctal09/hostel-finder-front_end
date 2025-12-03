'use client';
import { 
  Search, 
  SlidersHorizontal, 
  MapPin, 
  Bed, 
  Users, 
  DollarSign, 
  Star, 
  Wifi, 
  Wind, 
  Tv, 
  Coffee,
  Heart,
  X,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';

// Filter Button Component
function FilterButton({ 
  label, 
  active, 
  onClick 
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button 
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-semibold transition ${
        active 
          ? 'bg-blue-600 text-white shadow-md' 
          : 'bg-white text-gray-700 hover:bg-gray-100'
      }`}
    >
      {label}
    </button>
  );
}

// Room Card Component
function RoomCard({ 
  image, 
  name, 
  location, 
  type, 
  price, 
  rating, 
  reviews, 
  availableSeats, 
  amenities, 
  isFavorite 
}: {
  image: string;
  name: string;
  location: string;
  type: string;
  price: string;
  rating: number;
  reviews: number;
  availableSeats: number;
  amenities: string[];
  isFavorite?: boolean;
}) {
  const [favorite, setFavorite] = useState(isFavorite || false);

  const amenityIcons: Record<string, React.ElementType> = {
    'WiFi': Wifi,
    'AC': Wind,
    'TV': Tv,
    'Cafeteria': Coffee
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
      <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition"></div>
        <button 
          onClick={() => setFavorite(!favorite)}
          className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition shadow-md z-10"
        >
          <Heart 
            size={20} 
            className={favorite ? 'fill-red-500 text-red-500' : 'text-gray-600'} 
          />
        </button>
        <div className="absolute bottom-3 left-3 bg-white px-3 py-1 rounded-full">
          <span className="text-sm font-semibold text-blue-600">{availableSeats} seats available</span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="font-bold text-xl text-gray-800 mb-1">{name}</h3>
            <div className="flex items-center text-gray-600 text-sm mb-2">
              <MapPin size={16} className="mr-1" />
              {location}
            </div>
          </div>
          <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-lg">
            <Star className="text-yellow-500 fill-yellow-500" size={16} />
            <span className="ml-1 font-semibold text-sm">{rating}</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Users size={16} className="mr-1 text-blue-600" />
            <span>{type}</span>
          </div>
          <div className="flex items-center">
            <DollarSign size={16} className="mr-1 text-green-600" />
            <span className="font-semibold">{price}/month</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {amenities.map((amenity, index) => {
            const Icon = amenityIcons[amenity];
            return (
              <div key={index} className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                {Icon && <Icon size={14} className="mr-1 text-gray-600" />}
                <span className="text-xs text-gray-700">{amenity}</span>
              </div>
            );
          })}
        </div>

        <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105">
          View Details
        </button>
      </div>
    </div>
  );
}

export default function RoomFinder() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedType, setSelectedType] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');

  const rooms = [
    {
      image: "",
      name: "Sunset Block A-101",
      location: "Near Library, Campus North",
      type: "2-Sharing",
      price: "$350",
      rating: 4.8,
      reviews: 124,
      availableSeats: 1,
      amenities: ['WiFi', 'AC', 'TV', 'Cafeteria']
    },
    {
      image: "",
      name: "Ocean View B-205",
      location: "Beachfront, South Campus",
      type: "3-Sharing",
      price: "$280",
      rating: 4.6,
      reviews: 89,
      availableSeats: 2,
      amenities: ['WiFi', 'AC', 'Cafeteria']
    },
    {
      image: "",
      name: "Garden Suite C-303",
      location: "Garden District, West Wing",
      type: "Single",
      price: "$500",
      rating: 4.9,
      reviews: 156,
      availableSeats: 1,
      amenities: ['WiFi', 'AC', 'TV', 'Cafeteria']
    },
    {
      image: "",
      name: "Downtown Deluxe D-112",
      location: "City Center, Main Campus",
      type: "2-Sharing",
      price: "$400",
      rating: 4.7,
      reviews: 98,
      availableSeats: 2,
      amenities: ['WiFi', 'AC', 'TV']
    },
    {
      image: "",
      name: "Riverside E-220",
      location: "Riverside, East Campus",
      type: "3-Sharing",
      price: "$300",
      rating: 4.5,
      reviews: 72,
      availableSeats: 1,
      amenities: ['WiFi', 'Cafeteria']
    },
    {
      image: "",
      name: "Mountain View F-401",
      location: "Hill Station, Premium Block",
      type: "Single",
      price: "$550",
      rating: 5.0,
      reviews: 203,
      availableSeats: 1,
      amenities: ['WiFi', 'AC', 'TV', 'Cafeteria']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Search Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Room</h1>
            <p className="text-xl text-blue-100">Search from over 500+ available rooms across campus</p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-4 flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex items-center bg-gray-100 rounded-lg px-4 py-3">
                <Search size={20} className="text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search by location, block, or room number..." 
                  className="ml-3 bg-transparent outline-none text-gray-800 w-full"
                />
              </div>
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
              >
                <SlidersHorizontal size={20} className="text-gray-700 mr-2" />
                <span className="font-semibold text-gray-700">Filters</span>
              </button>
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105">
                Search
              </button>
            </div>

            {/* Filters Panel */}
            {showFilters && (
              <div className="bg-white rounded-2xl shadow-2xl p-6 mt-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-gray-800">Filters</h3>
                  <button 
                    onClick={() => setShowFilters(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <X size={20} className="text-gray-600" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Room Type</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500">
                      <option>All Types</option>
                      <option>Single</option>
                      <option>2-Sharing</option>
                      <option>3-Sharing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Price Range</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500">
                      <option>All Prices</option>
                      <option>Under $300</option>
                      <option>$300 - $400</option>
                      <option>$400 - $500</option>
                      <option>Above $500</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500">
                      <option>All Locations</option>
                      <option>Campus North</option>
                      <option>Campus South</option>
                      <option>Campus East</option>
                      <option>Campus West</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Amenities</label>
                  <div className="flex flex-wrap gap-3">
                    {['WiFi', 'AC', 'TV', 'Cafeteria', 'Laundry', 'Parking'].map((amenity) => (
                      <label key={amenity} className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200 transition">
                        <input type="checkbox" className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-gray-700">{amenity}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex justify-end space-x-3">
                  <button className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-semibold transition">
                    Reset
                  </button>
                  <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition">
                    Apply Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            <FilterButton label="All Rooms" active={selectedType === 'all'} onClick={() => setSelectedType('all')} />
            <FilterButton label="Single" active={selectedType === 'single'} onClick={() => setSelectedType('single')} />
            <FilterButton label="2-Sharing" active={selectedType === '2-sharing'} onClick={() => setSelectedType('2-sharing')} />
            <FilterButton label="3-Sharing" active={selectedType === '3-sharing'} onClick={() => setSelectedType('3-sharing')} />
            <FilterButton label="Available Now" />
            <FilterButton label="Top Rated" />
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Available Rooms</h2>
            <p className="text-gray-600">Showing {rooms.length} results</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select className="p-2 border border-gray-300 rounded-lg outline-none focus:border-blue-500 bg-white">
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
              <option>Availability</option>
            </select>
          </div>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room, index) => (
            <RoomCard key={index} {...room} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition transform hover:scale-105">
            Load More Rooms
          </button>
        </div>
      </div>
    </div>
  );
}