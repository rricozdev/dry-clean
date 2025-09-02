import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export const ChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  return (
    <>
      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-4 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 z-40 flex flex-col">
          {/* Header */}
          <div className="bg-indigo-700 text-white px-4 py-3 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Chat DryClean</h3>
              <p className="text-sm opacity-90">¿En qué podemos ayudarte?</p>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:bg-indigo-800 rounded p-1"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-3">
              <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                <p className="text-sm">
                  ¡Hola! Soy tu asistente virtual de DryClean. ¿Cómo puedo
                  ayudarte hoy?
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                <p className="text-sm">
                  Puedes preguntarme sobre nuestros servicios de limpieza,
                  precios o programar una cita.
                </p>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-3">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Escribe tu mensaje..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:border-transparent"
              />
              <button className="bg-emerald-500 text-white p-2 rounded-lg hover:bg-emerald-400 transition-colors">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 bg-emerald-500 text-white p-4 rounded-full shadow-lg hover:bg-emerald-400 transition-all transform hover:scale-105 z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </>
  );
};
