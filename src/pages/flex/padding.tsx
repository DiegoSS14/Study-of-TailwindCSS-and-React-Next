import Box from "@/components/box";
import Pagina from "@/components/template/Pagina";

export default function Padding() {
    return (
        <Pagina>
            <div className="w-full min-h-screen flex-center gap-4">
                <Box className="px-4">#1</Box>
                <Box className="py-4">#2</Box>
                <Box className="pr-4">#3</Box>
                <Box className="pl-4">#4</Box>
                <Box className="pt-[12px]">#4</Box>
                <Box className="pb-[16px]">#4</Box>
                <Box className="p-10">#4</Box>
            </div>
        </Pagina>
    )
}