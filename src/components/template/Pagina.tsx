import { useState } from "react"
import Menu from "./Menu"
import { SunIcon, MoonIcon } from 'lucide-react'

interface PaginaProps {
    children: any
}

export default function Pagina(props: PaginaProps) {
    const [dark, setDark] = useState(true)

    function setTheme() {
        setDark(!dark)
    }

    return (
        <main className={`
            ${dark && 'dark'} w-full min-h-screen flex
        `}>
            <button className="fixed top-4 right-4" onClick={setTheme}>
                {dark ? <SunIcon size={24}/> : <MoonIcon size={24}/>}
            </button>
            <aside>
                <Menu></Menu>
            </aside>
            <div className="w-full h-full flex flex-col p-6 bg-zinc-50 dark:bg-zinc-950">
                {props.children}
            </div>
        </main>
    )
}