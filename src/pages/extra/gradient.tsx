import Box from "@/components/box";
import Pagina from "@/components/template/Pagina";

export default function Gradient() {
    return (
        <Pagina>
            <div className="w-full min-h-screen flex -bg-linear-330 from-yellow-400 to-orange-700">
                <Box className="container h-30 m-auto bg-white">
                    {/* Para colocar o gradient dentro do texto basta fazer o gradient e aplicar logo em seguida text-transparent e bg-clip-text */}
                    {/* Isso garante escondar a cor original do texto e cobrir ele com a cor do background */}
                    <span className="font-bold bg-linear-to-bl from-purple-600 via-pink-500 to-red-400 text-transparent bg-clip-text">
                        Gradient text
                    </span>
                </Box>
            </div>
        </Pagina>
    )
}