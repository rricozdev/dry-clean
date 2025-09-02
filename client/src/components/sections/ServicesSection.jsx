import { useCart } from "@/context/CartContext";
import { Star } from "lucide-react";

const services = [
  {
    id: "planchado-ropa",
    name: "Planchado de ropa",
    price: 81900,
    image: "https://ext.same-assets.com/2321480339/802747095.jpeg",
    rating: 5,
  },
  {
    id: "lavado-tapete",
    name: "Lavado de tapete mechas",
    price: 80900,
    image: "https://ext.same-assets.com/2321480339/1534069164.jpeg",
    rating: 5,
  },
  {
    id: "paquete-aseo",
    name: "Paquete aseo 4 veces al mes",
    price: 323900,
    image: "https://ext.same-assets.com/2321480339/1168613025.jpeg",
    rating: 5,
  },
  {
    id: "aseo-post-fiesta",
    name: "Aseo post fiesta",
    price: 84900,
    image: "https://ext.same-assets.com/2321480339/1393669519.jpeg",
    rating: 5,
  },
];

export const ServicesSection = () => {
  const { addToCart } = useCart();

  const formatPrice = (price) =>
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price);

  const handleAddToCart = (service) => {
    addToCart({
      id: service.id,
      name: service.name,
      price: service.price,
      image: service.image,
    });
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Servicios relacionados
        </h2>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {service.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${
                        star <= service.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Precio */}
                <div className="mb-4">
                  <span className="text-sm text-gray-500">desde</span>
                  <div className="text-xl font-bold text-gray-900">
                    {formatPrice(service.price)}
                  </div>
                </div>

                <button
                  onClick={() => handleAddToCart(service)}
                  className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Agendar servicio
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
