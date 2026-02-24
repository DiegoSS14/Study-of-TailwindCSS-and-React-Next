import Pagina from "@/components/template/Pagina";

export default function Components() {
    return (
        <Pagina>
            <div className="flex-center gap-4 min-h-screen">
                <button className={`
                btn btn-info
            `}>Info</button>

                <button className={`
                btn btn-success
            `}>Success</button>

                <button className={`
                btn btn-error
            `}>Error</button>
            </div>
        </Pagina>
    )
}