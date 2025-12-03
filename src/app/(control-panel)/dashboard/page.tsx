'use client';
import { 
  LayoutDashboard, 
  Building2, 
  Users, 
  Bed, 
  Settings, 
  TrendingUp, 
  AlertCircle,
  CheckCircle,
  Clock,
  DollarSign,
  Menu,
  X,
  Bell,
  Search,
  Calendar,
  BarChart3,
  UserPlus
} from 'lucide-react';
import { useState } from 'react';

// Stat Card Component
function StatCard({ 
  icon: Icon, 
  title, 
  value, 
  change, 
  trend, 
  bgColor, 
  iconColor 
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  bgColor: string;
  iconColor: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center`}>
          <Icon className={iconColor} size={24} />
        </div>
        <span className={`text-sm font-semibold ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </span>
      </div>
      <h3 className="text-gray-600 text-sm mb-1">{title}</h3>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
    </div>
  );
}

// Quick Action Card
function QuickAction({ 
  icon: Icon, 
  title, 
  description, 
  color 
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <button className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-1 text-left w-full">
      <div className={`w-12 h-12 ${color} bg-opacity-10 rounded-lg flex items-center justify-center mb-4`}>
        <Icon className={color} size={24} />
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </button>
  );
}

export default function ControlPanel() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const stats = [
    {
      icon: Building2,
      title: "Total Rooms",
      value: "248",
      change: "+12%",
      trend: "up" as const,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Users,
      title: "Active Students",
      value: "523",
      change: "+8%",
      trend: "up" as const,
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Bed,
      title: "Available Beds",
      value: "47",
      change: "-5%",
      trend: "down" as const,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: DollarSign,
      title: "Revenue (Month)",
      value: "$45.2K",
      change: "+15%",
      trend: "up" as const,
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600"
    }
  ];

  const quickActions = [
    {
      icon: UserPlus,
      title: "Add New Student",
      description: "Register a new student to the hostel",
      color: "text-blue-600"
    },
    {
      icon: Building2,
      title: "Manage Rooms",
      description: "View and update room information",
      color: "text-purple-600"
    },
    {
      icon: Calendar,
      title: "View Bookings",
      description: "Check upcoming reservations",
      color: "text-green-600"
    },
    {
      icon: BarChart3,
      title: "Generate Report",
      description: "Export analytics and statistics",
      color: "text-orange-600"
    }
  ];

  const recentActivities = [
    { type: "check-in", user: "John Doe", room: "A-101", time: "2 hours ago", status: "completed" },
    { type: "booking", user: "Sarah Smith", room: "B-205", time: "4 hours ago", status: "pending" },
    { type: "check-out", user: "Mike Johnson", room: "C-303", time: "5 hours ago", status: "completed" },
    { type: "maintenance", user: "Room A-115", room: "", time: "6 hours ago", status: "in-progress" }
  ];

  return <>
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      {/* Top Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                <Menu size={24} />
              </button>
              <div className="flex items-center ml-4 md:ml-0">
                <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <LayoutDashboard className="text-white" size={24} />
                </div>
                <span className="ml-3 text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Control Panel
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-4 py-2">
                <Search size={20} className="text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="ml-2 bg-transparent outline-none text-sm w-64"
                />
              </div>
              <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                AD
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back, Admin!</h1>
          <p className="text-gray-600">Here's what's happening with your hostel today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Quick Actions & Chart */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Quick Actions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <QuickAction key={index} {...action} />
                ))}
              </div>
            </div>

            {/* Occupancy Chart Placeholder */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Occupancy Overview</h2>
              <div className="h-64 bg-linear-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 size={48} className="mx-auto text-blue-600 mb-2" />
                  <p className="text-gray-600">Chart visualization would go here</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Recent Activity */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Recent Activity</h2>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 pb-4 border-b last:border-b-0">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      activity.status === 'completed' ? 'bg-green-100' :
                      activity.status === 'pending' ? 'bg-yellow-100' :
                      'bg-blue-100'
                    }`}>
                      {activity.status === 'completed' ? (
                        <CheckCircle size={20} className="text-green-600" />
                      ) : activity.status === 'pending' ? (
                        <Clock size={20} className="text-yellow-600" />
                      ) : (
                        <AlertCircle size={20} className="text-blue-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-gray-800">{activity.user}</p>
                      <p className="text-sm text-gray-600">{activity.room || 'Maintenance Request'}</p>
                      <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-2 text-blue-600 font-semibold hover:bg-blue-50 rounded-lg transition">
                View All Activity
              </button>
            </div>

            {/* System Status */}
            <div className="bg-white rounded-xl shadow-md p-6 mt-6">
              <h3 className="font-bold text-lg mb-4 text-gray-800">System Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Server Status</span>
                  <span className="flex items-center text-green-600 text-sm font-semibold">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                    Online
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Database</span>
                  <span className="flex items-center text-green-600 text-sm font-semibold">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                    Connected
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Backup</span>
                  <span className="flex items-center text-blue-600 text-sm font-semibold">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Scheduled
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
}