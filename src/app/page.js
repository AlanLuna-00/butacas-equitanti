import WhatsAppButton from "@/components/whatsAppButton";
import Navbar from "@/components/Navbar/index.jsx";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="max-h-96">
          <Carousel />
        </div>
        {/* Otro contenido de tu página */}
      </div>
      <h1>Hola</h1>
      <WhatsAppButton />
    </>
  );
}
