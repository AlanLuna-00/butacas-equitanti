/* eslint-disable @next/next/no-img-element */
"use client";
const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Mensaje predefinido
    const mensaje = "Hola, estoy interesado en las butacas";

    // Lógica para abrir el enlace de WhatsApp con el mensaje predefinido
    const url = "https://wa.me/1234567890?text=" + encodeURIComponent(mensaje);

    // Abrir enlace en una nueva ventana
    window.open(url, "_blank");
  };

  return (
    <button
      className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded-full"
      onClick={handleWhatsAppClick}
    >
      <img
        src="https://static.vecteezy.com/system/resources/previews/018/819/295/original/whatsapp-icon-transparent-free-png.png"
        alt="WhatsApp"
        className="w-10 h-10 rounded-full"
      />
    </button>
  );
};

export default WhatsAppButton;
