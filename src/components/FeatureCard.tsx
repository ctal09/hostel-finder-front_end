export default function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  bgColor, 
  iconColor 
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
      <div className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center mb-4`}>
        <Icon className={iconColor} size={24} />
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

