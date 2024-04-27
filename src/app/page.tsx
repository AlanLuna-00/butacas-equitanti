import CarouselView from "@/components/Carousel/Carousel";
import { MuiNavbar } from "../components/Navbar/Navbar";
import Divider from "@/components/Divider/Divider";

export default function Home() {
  return (
    <>
      <MuiNavbar />
      <CarouselView />

      <main className="container mx-auto">
        <Divider title="Sobre Nosotros" />
        <Divider title="Trabajos Destacados" />
      </main>
    </>
  );
}
