export const HowItWorksSection = () => {
  const steps = [
    {
      number: "1.",
      title: "Escoge tu servicio",
      description:
        "Selecciona el servicio de limpieza que necesitas para tu hogar",
    },
    {
      number: "2.",
      title: "Personaliza tu servicio y escoge día y hora",
      description:
        "Ajusta los detalles según tus necesidades y elige cuándo quieres el servicio",
    },
    {
      number: "3.",
      title: "Recibe el profesional en tu hogar",
      description:
        "Nuestro especialista llegará a tu domicilio en el horario acordado",
    },
    {
      number: "4.",
      title: "Califica el servicio realizado",
      description: "Evalúa la calidad del trabajo y ayúdanos a mejorar",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          ¿Cómo funciona DryClean?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="text-6xl font-bold text-gray-900 mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
