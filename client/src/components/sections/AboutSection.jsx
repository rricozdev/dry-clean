import { Shield, Users, Award, Clock } from "lucide-react";

// Subcomponente para cada "feature"
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="text-center p-6 bg-gray-50 rounded-lg">
    <div className="inline-flex items-center justify-center w-12 h-12 bg-dryclean-purple text-white rounded-lg mb-4">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Profesionales Verificados",
      description:
        "Todos nuestros especialistas pasan por un riguroso proceso de verificación y capacitación",
    },
    {
      icon: Users,
      title: "Experiencia Comprobada",
      description:
        "Más de 5 años conectando hogares con los mejores profesionales de limpieza",
    },
    {
      icon: Award,
      title: "Calidad Garantizada",
      description:
        "Ofrecemos garantía en todos nuestros servicios para tu tranquilidad",
    },
    {
      icon: Clock,
      title: "Puntualidad",
      description:
        "Llegamos en el horario acordado, respetando tu tiempo y agenda",
    },
  ];

  return (
    <section id="about" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda - Contenido */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              ¿Quiénes somos?
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              En DryClean somos una empresa colombiana dedicada a conectar
              hogares con profesionales expertos en servicios de limpieza y
              aseo. Nuestra misión es hacer que mantener tu hogar impecable sea
              fácil, confiable y accesible para todos.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Creemos que cada hogar merece el mejor cuidado, por eso trabajamos
              solo con especialistas certificados que comparten nuestros valores
              de excelencia, puntualidad y respeto.
            </p>

            <div className="bg-dryclean-purple text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">
                ¿Necesitas una solución de mayor complejidad?
              </h3>
              <p className="mb-4 opacity-90">
                Con nuestro servicio de presupuestos, agenda a un maestro
                especialista para que te asista en tu domicilio.
              </p>
              <button
                type="button"
                className="bg-white text-dryclean-purple px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Conoce Más
              </button>
            </div>
          </div>

          {/* Columna derecha - Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
