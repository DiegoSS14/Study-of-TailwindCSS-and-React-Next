import Box from "@/components/box";
import Pagina from "@/components/template/Pagina";

export default function Inicial() {
    return (
        <Pagina>
            <div className="
            grid
            gap-2
            md:grid-cols-3
            lg:grid-cols-4
            xlg:grid-cols-6
            ">
                <Box className="col-span-2">#1</Box>
                <Box className="">#2</Box>
                <Box className="">#3</Box>
                <Box className="">#4</Box>
                <Box className="">#5</Box>
                <Box className="">#6</Box>
                <Box className="">#7</Box>
                <Box className="">#8</Box>
                <Box className="col-span-3">#9</Box>
            </div>
        </Pagina>
    )
}