import Box from "@/components/box";
import Pagina from "@/components/template/Pagina";

export default function Redimensionamento() {
    return (
        <Pagina>
            <div className="
            w-full min-h-screen flex flex-col gap-1 p-4
        ">
                <div className="w-full h-full flex justify-center space-x-1">
                    <Box className="w-70 shrink-0 grow-0">Grow 0 e shrink 0</Box> {/* Não aumenta e não diminui */}
                    <Box className="w-70 p-2 grow-0">Grow 0</Box> {/* Não aumenta mas diminui */}
                    <Box className="w-70 p-2 grow shrink">Grow e shrink</Box> {/* Aumenta e diminui ignorando o tamanho inicial */}
                </div>
                <div className="w-full h-full flex justify-center space-x-1">
                    <Box className="w-70 flex-initial">Flex initial</Box> {/* Não aumenta mas diminui */}
                    <Box className="w-70 p-2 flex-1">Flex 1</Box> {/* Aumenta e diminui ignorando o tamanho inicial */}
                    <Box className="w-70 p-2 flex-none">Flex none</Box> {/* Não aumenta e não diminui */}
                </div>
            </div>
        </Pagina>
    )
}