interface BoxProps {
    className?: string
    children: any
}

export default function Box(props:BoxProps) {
    return(
        <div className={`flex items-center justify-center bg-amber-400 rounded-md text-2xl ${props.className}`}>
            {props.children}
        </div>
    )
}