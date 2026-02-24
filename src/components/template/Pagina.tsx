import Menu from "./Menu"

interface PaginaProps {
    children: any
}

export default function Pagina(props: PaginaProps) {
    return (
        <main className="w-full min-h-screen flex">
            <aside>
                <Menu></Menu>
            </aside>
            <div className="w-full h-full flex flex-col p-6">
                {props.children}
            </div>
        </main>
    )
}