import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, MapPin, Search } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { CartModal } from "@/components/CartModal";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems, setIsCartOpen } = useCart();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-indigo-900 text-white sticky top-0 z-50">
      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-white">
            <div className="text-2xl font-bold">DryClean</div>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Servicios de limpieza..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center space-x-6 text-white">
            {/* Location */}
            <div className="flex items-center space-x-1 text-sm text-white">
              <MapPin className="h-4 w-4 text-white" />
              <span>Tu ubicación</span>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-2">
              {/* Regístrate */}
              <Link
                to="/register"
                className="px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-green-700 transition-colors duration-200"
              >
                Regístrate
              </Link>

              {/* Iniciar sesión */}
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-indigo-900 transition-colors duration-200"
              >
                Iniciar sesión
              </Link>
            </div>

            {/* Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-indigo-800 rounded-lg transition-colors"
            >
              <ShoppingCart className="h-6 w-6 text-white" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-indigo-800 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="hidden md:block bg-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-8 h-12 overflow-x-auto text-gray-400">
            <Link to="/" className="hover:text-indigo-700 whitespace-nowrap">
              Inicio
            </Link>
            <span className="hover:text-indigo-700 whitespace-nowrap cursor-pointer">
              Servicios
            </span>
            <span className="hover:text-indigo-700 whitespace-nowrap cursor-pointer">
              Quiénes somos
            </span>
            <span className="hover:text-indigo-700 whitespace-nowrap cursor-pointer">
              Contacto
            </span>
            <Link
              to="/agenda"
              className="hover:text-indigo-700 whitespace-nowrap"
            >
              Agenda tu servicio
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-900 border-t border-indigo-900 text-white">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Servicios de limpieza..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            {/* Mobile Navigation */}
            <div className="space-y-3">
              <Link
                to="/"
                onClick={closeMenu}
                className="block py-2 hover:text-gray-200"
              >
                Inicio
              </Link>
              <span className="block py-2 hover:text-gray-200 cursor-pointer">
                Servicios
              </span>
              <span className="block py-2 hover:text-gray-200 cursor-pointer">
                Quiénes somos
              </span>
              <span className="block py-2 hover:text-gray-200 cursor-pointer">
                Contacto
              </span>
              <Link
                to="/agenda"
                onClick={closeMenu}
                className="block py-2 hover:text-gray-200"
              >
                Agenda tu servicio
              </Link>
            </div>

            {/* Mobile Auth & Cart */}
            <div className="border-t border-indigo-900 pt-4 space-y-3">
              <div className="flex items-center space-x-1 text-sm text-white">
                <MapPin className="h-4 w-4 text-white" />
                <span>Tu ubicación</span>
              </div>

              <div className="flex space-x-2">
                <Link
                  to="/register"
                  onClick={closeMenu}
                  className="flex-1 px-4 py-2 text-center rounded-lg bg-indigo-500 text-white hover:bg-indigo-800 transition-colors"
                >
                  Regístrate
                </Link>
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="flex-1 px-4 py-2 text-center rounded-lg border border-white text-white hover:bg-white hover:text-indigo-900 transition-colors"
                >
                  Iniciar sesión
                </Link>
              </div>

              <button
                onClick={() => {
                  setIsCartOpen(true);
                  closeMenu();
                }}
                className="w-full flex items-center justify-center space-x-2 p-3 hover:bg-indigo-800 rounded-lg transition-colors"
              >
                <ShoppingCart className="h-5 w-5 text-white" />
                <span>Carrito ({getTotalItems()})</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <CartModal />
    </nav>
  );
};
