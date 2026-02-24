import Box from "@/components/box";
import Pagina from "@/components/template/Pagina";

export default function Margin() {
    return (
        <Pagina>
            <div className="w-full min-h-screen flex-center">
                <Box className="mx-4 p-2">#1</Box>
                <Box className="mb-10 p-4">#2</Box>
                <Box className="mt-10 p-4">#3</Box>
                <Box className="ml-10 p-4">#4</Box>
                <Box className="mr-30 p-4">#5</Box>
                <Box className="mt-[360px] p-4">#6</Box>
            </div>
        </Pagina>
    )
}