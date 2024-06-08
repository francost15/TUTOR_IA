import NavBar from "@/components/navbar";

export default function DashboardLayout({children}: {children: React.ReactNode;}) {
    return (

        <div>
        <NavBar />
            <div>
            {children}
            </div>
        </div>
    );
}