import { Star, Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const HeroSection = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: "aseo-general",
      name: "Aseo General",
      price: 89900,
      image: "https://ext.same-assets.com/2321480339/3891845531.jpeg",
    });
  };

  return (
    <section className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-sm text-gray-500">
          <span>Home</span> / <span>Servicios</span> /{" "}
          <span className="text-gray-900">Aseo hogar</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image */}
          <div className="relative">
            <img
              src="https://ext.same-assets.com/2321480339/3891845531.jpeg"
              alt="Servicios de aseo en el hogar"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column - Content */}
          <div>
            {/* Title and Rating */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-3">
                  Aseo hogar
                </h1>
                <div className="flex items-center space-x-2">
                  <button className="text-gray-400 hover:text-red-500">
                    <Heart className="h-6 w-6" />
                  </button>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                Si quieres tener tu hogar impecable, pero por algún motivo no te
                puedes encargar de esa labor{" "}
                <strong>¡este es el servicio perfecto para ti!</strong> Nuestros
                especialistas dejarán tus espacios limpios y organizados como te
                encanta tenerlos. Contrata a un experto en aseo general según el
                tamaño de tu hogar:
              </p>

              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-dryclean-purple mr-2">▷</span>
                  <strong>4 horas:</strong> hogares hasta 60m2.
                </li>
                <li className="flex items-center">
                  <span className="text-dryclean-purple mr-2">▷</span>
                  <strong>6 horas:</strong> hogares hasta 90m2.
                </li>
                <li className="flex items-center">
                  <span className="text-dryclean-purple mr-2">▷</span>
                  <strong>8 horas:</strong> hogares hasta 130m2.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>¡Agenda hoy mismo tu cita con DryClean</strong>, la
                ayuda que necesitas!
              </p>
            </div>

            {/* Price and CTA */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-sm text-gray-500">Desde</span>
                  <div className="text-3xl font-bold text-gray-900">
                    $89.900
                  </div>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-indigo-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors mb-4"
              >
                Agendar Servicio
              </button>

              {/* Additional Info */}
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start space-x-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <div>
                    <strong>Garantía</strong>
                    <p>
                      Cada especialista se hace responsable de la garantía. Por
                      favor antes de iniciar la ejecución del servicio,
                      preguntar al especialista por el tiempo de garantía.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <span className="text-blue-500 font-bold">?</span>
                  <div>
                    <strong>
                      ¿Necesitas ayuda para contratar un servicio?
                    </strong>
                    <p>Haz clic aquí para atención personalizada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
