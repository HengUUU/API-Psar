export default function FarmerCard({ farmer }) {
    return (
      <div className="flex flex-col items-center max-w-xs text-center">
        <img src={farmer.image} alt={farmer.name} className="w-24 h-24 rounded-full object-cover mb-4" />
        <h3 className="text-lg font-semibold">{farmer.name}</h3>
        <p className="text-gray-600">{farmer.distance}</p>
      </div>
    );
  }