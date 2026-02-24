import { LucideIcon } from "lucide-react"
import Link from "next/link"
import { ReactNode } from "react"

interface MenuItemProps {
    icon: LucideIcon
    link: string
    title: string
}

export default function MenuItem({icon: Icon, title, link}: MenuItemProps) {
    return(
        <Link href={link} className="flex items-center gap-2 px-4 py-3 rounded-md transition-colors duration-500 hover:bg-zinc-300 dark:hover:bg-zinc-950">
            <span className="text-zinc-400"><Icon size={24}/></span>
            {/* Use as classes "break-all ou "truncate" para o texto não ultrapassar o container pai" */}
            <span className="break-all text-zinc-600 dark:text-zinc-200 leading-4.5">{title}</span>
        </Link>
    )
}