import { Inputchat } from "@/components";
import NavBar from "@/components/navbar";
import SideBar from "@/components/sidebar";

export default function DashboardLayout({children}: {children: React.ReactNode;}) {
    return (
        <div className="flex"> {/* Ajuste aquí para asegurar que SideBar y el contenedor de NavBar/children estén en flex */}
            <SideBar/>
            <div className="flex flex-1 flex-col"> {/* Ajuste para expandir este contenedor y organizar su contenido verticalmente */}
                <NavBar />
                <div>
                    {children}
                </div>
                <Inputchat
                    // onSendMessage={handlePost}
                    placeholder='Escribe aquí lo que deseas'
                    disableCorrections/>
            </div>
        </div>
    );
}