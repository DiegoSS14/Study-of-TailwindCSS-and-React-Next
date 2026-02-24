import Box from "@/components/box";
import Pagina from "@/components/template/Pagina";

export default function Space() {
    return (
        <Pagina>
            <div className="w-full min-h-screen flex-center space-x-4">
                <Box className="p-4">#1</Box>
                <Box className="p-4">#2</Box>
                <Box className="p-4">#3</Box>
                <Box className="p-4">#4</Box>
                <Box className="p-4">#5</Box>
                <Box className="p-4">#6</Box>
            </div>
        </Pagina>
    )
}