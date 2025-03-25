import Link from "next/link";
import CarCard from "@/components/CarCard";
import { CarJson, CarItem } from "@/interfaces";

export default async function CarCatalog({ carproviderJson }: { carproviderJson: CarJson }) {
  const carproviderJsonReady = await carproviderJson;

  return (
    <div className="container mx-auto px-4 py-10 mt-20">
      {/* Title */}
      <h2 className="text-xl font-bold text-center mb-8 text-white font-serif">
        Explore {carproviderJsonReady.count} Providers in Our Catalog
      </h2>

      {/* Car Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {carproviderJsonReady.data.map((carItem: CarItem) => (
          <Link
            key={carItem.id}
            href={`/carinfo/${carItem.id}`}
            className="transform hover:scale-105 transition-transform"
          >
            <CarCard
              name={carItem.name}
              desc={carItem.description}
              imgSrc={carItem.picture}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
