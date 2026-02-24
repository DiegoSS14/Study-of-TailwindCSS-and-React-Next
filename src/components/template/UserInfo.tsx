interface UserInfoProps {
    avatarUrl?: string
    name: string
    email: string
    className?: string
}

let avatarUrl: string = '/default-avatar.jpg'
let avatarUrl2: string = 'https://br.web.img3.acsta.net/pictures/20/11/16/14/30/2030770.jpg' 

export default function UserInfo({ avatarUrl, name, email, className }: UserInfoProps) {
    return (
        <div className={`flex items-center gap-2 px-2 py-3 border-t border-zinc-400 dark:border-t-zinc-700 ${className ? className : '' }`}>
            <div className="w-11 h-11 rounded-full overflow-hidden">
                <img
                    src={avatarUrl ? avatarUrl : avatarUrl2}
                    alt="avatar image"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="text-zinc-500 dark:text-zinc-200 flex flex-col">
                <h1 className="text-lg font-bold">{name}</h1>
                <p className="text-sm">{email}</p>
            </div>
        </div>
    )
}