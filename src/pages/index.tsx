import Pagina from "@/components/template/Pagina";
import Titulo from "@/components/template/Titulo";

export default function Home() {
    return(
        <div className="w-full min-h-screen flex flex-col">
            <Pagina>
                <Titulo title="Home" subtitle="Essa é a minha página home"/>
            </Pagina>
        </div>
    )
}