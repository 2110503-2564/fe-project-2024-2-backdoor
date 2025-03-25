import Image from "next/image";

export default function CarCard({ name, desc, imgSrc }: { name: string; desc: string; imgSrc: string }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full max-w-sm overflow-hidden border border-gray-200">
  {/* Image Section */}
  <div className="relative h-60 w-full overflow-hidden rounded-t-xl">
    <Image 
      src={imgSrc} 
      alt={name} 
      width={400} 
      height={300} 
      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
    />
  </div>

  {/* Car Info */}
  <div className="p-5 md:p-7">
    <h3 className="text-2xl font-semibold text-gray-900 tracking-wide">{name}</h3>
    <p className="text-gray-600 text-sm md:text-base mt-2 leading-relaxed">{desc}</p>
  </div>
</div>

  );
}
