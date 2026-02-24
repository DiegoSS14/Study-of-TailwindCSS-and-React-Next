import Box from "@/components/box";
import Pagina from "@/components/template/Pagina";

export default function Flex() {
    return (
        <Pagina>
            <div className="
                w-full min-h-screen gap-1
                flex flex-row 
                items-center 
                justify-center 
                flex-wrap content-center
            ">
                <Box className="w-[500px] h-20">#1</Box>
                <Box className="w-[500px] h-20">#2</Box>
                <Box className="w-[500px] h-20">#3</Box>
                <Box className="w-[500px] h-20">#4</Box>
                <Box className="w-[500px] h-20">#5</Box>
            </div>
        </Pagina>
    )
}