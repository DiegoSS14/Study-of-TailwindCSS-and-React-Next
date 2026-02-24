interface TituloProps {
    title: string
    subtitle: string
}

export default function Titulo(props: TituloProps) {
    return(
        <div className="flex flex-col gap-1">
            <h1 className="w-fit text-3xl font-bold bg-linear-to-br from-purple-600 to-red-600 text-transparent bg-clip-text">
                {props.title}</h1>
            <h2 className="text-zinc-800 dark:text-zinc-200">
                {props.subtitle}</h2>
        </div>
    )
}