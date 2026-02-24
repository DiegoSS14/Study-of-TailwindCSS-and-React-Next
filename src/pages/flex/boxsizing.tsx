import Box from "@/components/box";
import Pagina from "@/components/template/Pagina";

export default function BoxSizing() {
    return (
        <Pagina>
            <div className="w-full h-screen flex-col items-center space-y-4">
                <Box className="p-4 w-36 h-36">#1</Box>
                {/* O padrão de box-sizing é box-border no tailwind */}
                {/* Se você quiser que a borda ocupe um espaço além do tamanho padrão da caixa use box-content */}
                <Box className="p-4 w-36 h-36 bg-amber-600 border-8 box-content">#2</Box>
            </div>
        </Pagina>
    )
}