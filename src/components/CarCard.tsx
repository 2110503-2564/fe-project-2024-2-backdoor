export default function CarCard({ name, desc, imgSrc }: { name: string; desc: string; imgSrc: string }) {
  return (
    <div className="h-96 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow w-full max-w-sm">
      {/* Image */}
      <div className="h-56 w-full overflow-hidden rounded-t-lg">
        <img
          className="w-full h-full object-cover"
          alt={name}
          src={imgSrc}
        />
      </div>

      {/* Car Info */}
      <div className="p-4 md:p-6">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-600 text-sm md:text-lg mt-2">{desc}</p>
      </div>
    </div>
  );
}
