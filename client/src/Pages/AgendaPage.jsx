import { useState } from "react";
import { Calendar, Clock, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AgendaPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  const timeSlots = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const handleConfirm = () => {
    if (selectedDate && selectedTime) {
      setIsConfirmed(true);
    }
  };

  if (isConfirmed) {
    return (
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-gray-50 py-12">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¡Cita confirmada!
          </h2>
          <p className="text-gray-600 mb-6">
            Tu servicio ha sido agendado exitosamente.
          </p>
          <Link
            to="/"
            className="w-full bg-dryclean-purple text-white py-3 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors block text-center"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-[calc(100vh-200px)] py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-dryclean-purple hover:text-purple-700 mb-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Volver al inicio
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">
            Agenda tu servicio
          </h1>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Selecciona fecha y hora
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Fecha</h4>
              <input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => setSelectedDate(new Date(e.target.value))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dryclean-purple"
              />
            </div>

            <div>
              <h4 className="font-semibold mb-4">Hora</h4>
              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`px-4 py-3 text-sm rounded-lg border transition-colors ${
                      selectedTime === time
                        ? "bg-dryclean-purple text-white border-dryclean-purple"
                        : "bg-white text-gray-700 border-gray-300 hover:border-dryclean-purple"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t">
            <button
              onClick={handleConfirm}
              disabled={!selectedDate || !selectedTime}
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                selectedDate && selectedTime
                  ? "bg-indigo-400 text-white hover:bg-indigo-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Confirmar cita
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgendaPage;
