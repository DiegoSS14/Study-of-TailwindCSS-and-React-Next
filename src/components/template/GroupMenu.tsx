interface GroupMenuProps {
    title: string
    children: any
}

export default function GroupMenu(props: GroupMenuProps) {
    return(
        <div className="flex flex-col gap-2">
            <h3 className="text-sm uppercase font-bold text-zinc-400">{props.title}</h3>
            <div className="flex flex-col">
                {props.children}
            </div>
        </div>
    )
}