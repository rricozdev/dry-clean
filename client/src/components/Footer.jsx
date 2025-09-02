import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  ArrowUp,
} from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* CLIENTES */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CLIENTES</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Cómo funciona DryClean
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="hover:text-white transition-colors"
                >
                  Mi cuenta
                </Link>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Nuestros servicios
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Preguntas frecuentes
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Consejos y noticias
                </span>
              </li>
            </ul>
          </div>

          {/* PROFESIONALES */}
          <div>
            <h3 className="text-lg font-semibold mb-4">PROFESIONALES</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  DryClean para profesionales
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Postúlate como profesional
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Garantía profesionales
                </span>
              </li>
            </ul>
          </div>

          {/* DRYCLEAN */}
          <div>
            <h3 className="text-lg font-semibold mb-4">DRYCLEAN</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Contáctanos
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Superintendencia de Industria y Comercio
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Autorización de tratamiento de datos personales
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Política de protección de datos personales
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Auto-Gestión de Datos Personales
                </span>
              </li>
            </ul>
          </div>

          {/* SOCIAL & BACK TO TOP */}
          <div>
            <div className="flex justify-center md:justify-end mb-6">
              <button
                onClick={scrollToTop}
                className="bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full p-3 transition-colors"
              >
                <ArrowUp className="h-6 w-6 text-gray-500" />
              </button>
            </div>
            <div className="flex justify-center md:justify-end space-x-4">
              <button
                type="button"
                className="hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6 text-white" />
              </button>
              <button
                type="button"
                className="hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6 text-white" />
              </button>
              <button
                type="button"
                className="hover:text-white transition-colors"
              >
                <Youtube className="h-6 w-6 text-white" />
              </button>
              <button
                type="button"
                className="hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-indigo-300 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-90">
              <ul className="flex flex-wrap justify-center md:justify-start space-x-4 lg:space-x-6">
                <li>
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Términos y Condiciones
                  </span>
                </li>
                <li>
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Términos y Condiciones Promocionales
                  </span>
                </li>
                <li>
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Política de protección de datos personales
                  </span>
                </li>
              </ul>
            </div>
            <div className="text-sm opacity-90">
              {new Date().getFullYear()} © Todos los derechos reservados
            </div>
            <div>
              Design by{" "}
              <a
                href="https://www.linkedin.com/in/ricardo-ricoz/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline"
              >
                rricozdev
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
