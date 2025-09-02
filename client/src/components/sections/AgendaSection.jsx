import { useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const AgendaSection = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

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

  const formatDate = (date) => {
    return date.toLocaleDateString("es-CO", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Generar los días del mes actual
  const getCurrentMonth = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    return {
      days,
      monthName: firstDay.toLocaleDateString("es-CO", {
        month: "long",
        year: "numeric",
      }),
    };
  };

  const { days, monthName } = getCurrentMonth();

  return (
    <section id="agenda" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Agenda tu servicio
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Selecciona la fecha y hora que mejor te convenga. Nuestros
            especialistas estarán listos para brindarte el mejor servicio de
            limpieza.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calendario */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                <Calendar className="h-6 w-6 mr-2 text-indigo-700" />
                Selecciona una fecha
              </h3>
              <div className="text-lg font-medium text-gray-700">
                {monthName}
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-4">
              {["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"].map((day) => (
                <div
                  key={day}
                  className="text-center text-sm font-medium text-gray-500 py-2"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {days.map((date) => {
                const isToday =
                  date.toDateString() === new Date().toDateString();
                const isSelected =
                  selectedDate?.toDateString() === date.toDateString();
                const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));

                return (
                  <button
                    key={date.toISOString()}
                    onClick={() => !isPast && setSelectedDate(date)}
                    disabled={isPast}
                    className={`
                      p-2 text-sm rounded-lg transition-colors
                      ${
                        isPast
                          ? "text-gray-300 cursor-not-allowed"
                          : "hover:bg-green-300 hover:text-white"
                      }
                      ${
                        isSelected
                          ? "bg-green-400 text-white"
                          : isToday
                            ? "bg-blue-100 text-blue-900"
                            : "text-gray-700"
                      }
                    `}
                  >
                    {date.getDate()}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selección de hora y resumen */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Clock className="h-6 w-6 mr-2 text-indigo-400" />
                Selecciona una hora
              </h3>

              {selectedDate ? (
                <div className="grid grid-cols-4 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`
                        px-3 py-2 text-sm rounded-lg border transition-colors
                        ${
                          selectedTime === time
                            ? "bg-indigo-700 text-white border-indigo-300"
                            : "bg-white text-gray-700 border-gray-300 hover:border-dryclean-purple"
                        }
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">Primero selecciona una fecha</p>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Resumen de tu cita
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-3" />
                  <span>
                    {selectedDate
                      ? formatDate(selectedDate)
                      : "No seleccionada"}
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-3" />
                  <span>
                    {selectedTime
                      ? `${selectedTime} - ${Number.parseInt(selectedTime) + 1}:00`
                      : "No seleccionada"}
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>Tu domicilio</span>
                </div>
              </div>

              {selectedDate && selectedTime ? (
                <Link
                  to="/agenda"
                  className="w-full bg-indigo-300 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors block text-center"
                >
                  Confirmar Cita
                </Link>
              ) : (
                <button
                  disabled
                  className="w-full bg-gray-300 text-gray-500 py-3 px-6 rounded-lg font-semibold cursor-not-allowed"
                >
                  Selecciona fecha y hora
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
