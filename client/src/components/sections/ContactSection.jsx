import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado. Nos pondremos en contacto contigo pronto.");
  };

  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contáctanos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o necesitas ayuda? No dudes en contactarnos.
            Nuestro equipo está listo para ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Información de contacto
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-dryclean-purple text-white p-3 rounded-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Teléfono</h4>
                  <p className="text-gray-600">+57 312 454 7015</p>
                  <p className="text-sm text-gray-500">
                    Línea de atención al cliente
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-dryclean-purple text-white p-3 rounded-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">contacto@dryclean.com.co</p>
                  <p className="text-sm text-gray-500">Respuesta en 24 horas</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-dryclean-purple text-white p-3 rounded-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Ubicación</h4>
                  <p className="text-gray-600">Bogotá, Colombia</p>
                  <p className="text-sm text-gray-500">Servicio a domicilio</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-dryclean-purple text-white p-3 rounded-lg">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Horarios</h4>
                  <p className="text-gray-600">
                    Lunes a Sábado: 8:00 AM - 6:00 PM
                  </p>
                  <p className="text-sm text-gray-500">
                    Domingos: 9:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Envíanos un mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dryclean-purple focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dryclean-purple focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dryclean-purple focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dryclean-purple focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Asunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dryclean-purple focus:border-transparent"
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="servicio">Consulta sobre servicios</option>
                  <option value="presupuesto">Solicitar presupuesto</option>
                  <option value="soporte">Soporte técnico</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dryclean-purple focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-400 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
