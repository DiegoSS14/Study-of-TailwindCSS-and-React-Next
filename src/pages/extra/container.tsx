import Box from "@/components/box";
import Pagina from "@/components/template/Pagina";

export default function Container() {
    return (
        <Pagina>
            <div className="flex">
                {/* A classe container serve para dar um tamanho responsivo a um elemento */}
                <Box className="container m-auto">#1</Box>
            </div>
        </Pagina>
    )
}