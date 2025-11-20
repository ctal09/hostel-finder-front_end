
import { Building2, Users, Bed, Mail, CheckCircle, MapPin } from 'lucide-react';

// Room Card Component
export default function RoomCard({ 
  block, 
  roomNumber, 
  type, 
  availableSeats, 
  location, 
  gradientFrom, 
  gradientTo, 
  isAvailable 
}: {
  block: string;
  roomNumber: string;
  type: string;
  availableSeats: number;
  location: string;
  gradientFrom: string;
  gradientTo: string;
  isAvailable: boolean;
}) {
  
  return (
    
    <div className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 ${!isAvailable ? 'opacity-75' : ''}`}>
      <div className={`h-48 bg-linear-to-br ${gradientFrom} ${gradientTo} relative`}>
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition"></div>
        <div className={`absolute top-4 right-4 ${isAvailable ? 'bg-green-500' : 'bg-red-500'} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
          {isAvailable ? 'Available' : 'Occupied'}
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <Bed size={40} />
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-2xl mb-3 text-gray-800">
          {block} - Room {roomNumber}
        </h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Users size={18} className="mr-2 text-blue-600" />
            <span>Type: {type}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <CheckCircle size={18} className={`mr-2 ${isAvailable ? 'text-green-600' : 'text-red-600'}`} />
            <span>Available Seats: <strong className={isAvailable ? 'text-green-600' : 'text-red-600'}>{availableSeats}</strong></span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin size={18} className="mr-2 text-purple-600" />
            <span>{location}</span>
          </div>
        </div>
        <button 
          className={`w-full py-3 rounded-lg font-semibold transition transform ${
            isAvailable 
              ? `bg-linear-to-r ${gradientFrom} ${gradientTo} text-white hover:shadow-lg hover:scale-105` 
              : 'bg-gray-400 text-white cursor-not-allowed'
          }`}
          disabled={!isAvailable}
        >
          {isAvailable ? 'View Details' : 'Currently Full'}
        </button>
      </div>
    </div>
  );
}

