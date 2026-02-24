import Box from "@/components/box";
import Pagina from "@/components/template/Pagina";

export default function Positional() {
    return (
        <Pagina>
            <div className="
            grid
            grid-rows-3
            h-72
            gap-2
            md:grid-cols-3
            lg:grid-cols-4
            xlg:grid-cols-6
            bg-gray-700
            p-2
        ">
                <Box className="row-start-1 row-end-4">#1</Box>
                <Box className="row-start-3 row-end-4">#2</Box>
                <Box className="row-start-1 row-end-3 col-start-2 col-end-3">#3</Box>
                <Box className="row-start-1 row-end-2 col-start-3">#4</Box>
                <Box className="row-start-2 row-end-4">#5</Box>
            </div>
        </Pagina>
    )
}