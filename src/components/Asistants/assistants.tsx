import { titleFont } from '@/config/fonts'
interface Props{
    icon: string
    title: string
}
export const Assistants = ({icon,title}:Props) => {
  return (
    <div>
        <ul className="p-2">
            <li className="flex items-center text-sm hover:bg-neutral-700 rounded-xl">
                    {icon}
            <span className={`${titleFont.className}  text-sm ml-2`}>{title}</span>
            </li>
        </ul>
    </div>
  )
}
