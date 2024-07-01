import { Cardshome, ChatAsistant, ChatAsistantMobile } from "@/components";
import { titleFont } from "@/config/fonts";
import {IoBrushOutline, IoBulbOutline, IoColorWandOutline, IoDocumentTextOutline } from "react-icons/io5";

const cardsData = [
  { title: "De que trata este rubrica", icon: <IoBulbOutline size={30} /> },
  { title: "Generame una planeacion", icon: <IoColorWandOutline size={30}  /> },
  { title: "Generame del contenido del anexo de la junta 30 mayo", icon: <IoDocumentTextOutline size={30} /> },
  { title: "Quiero un juego didactico para niños de primero", icon: <IoBrushOutline size={30}/> },
];
export default function Home() {

  return (
    <section className="flex justify-center mt-12">
      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-8 lg:px-16 xl:px-32 mx-auto">
        {cardsData.map((card, index) => (
          <Cardshome key={index} title={card.title} icon={card.icon} />
        ))}
      </div> */}
 
    {/* <ChatAsistant/> */}
    <ChatAsistantMobile/>
    </section>
  );
}