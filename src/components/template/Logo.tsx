import { PaletteIcon } from 'lucide-react'
import Link from 'next/link'

interface LogoProps {
    classname?: string
}

export default function Logo(props: LogoProps) {
    return(
        <Link href='/' className={`flex gap-2 items-center ${props.classname ? props.classname : ''}`}>
            <PaletteIcon size={40}/>
            <span>Estudo <strong>TailwindCSS</strong></span>
        </Link>
    )
}