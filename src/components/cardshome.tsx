import { titleFont } from "@/config/fonts"

interface Props{
    title: string
    description?: string
    icon: string
}
export const Cardshome = ({title,description,icon}:Props) => {
  return (
    <button className="bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out p-4  hover:bg-neutral-50">
    <span className="flex justify-center">
    {icon}
    </span>
    <p className={`${titleFont.className} text-gray-700 text-center`}>{title} </p>
  </button>
  )
}
