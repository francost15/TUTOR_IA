// Asegúrate de que este código reemplace o ajuste adecuadamente tu componente Navbar actual
import Image from "next/image";
import icono from "../assets/icono_usuario.png";

export default function Navbar() {
    return (
        <nav className="flex justify-end p-3"> {/* Ajuste aquí: `flex-1` removido, `justify-end` añadido */}
            <Image src={icono} alt="Imagen Icono" width="40" height="40"/>
        </nav>
    );
}