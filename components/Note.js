import { useEffect } from "react"

export default function Note({ activeNote, setActiveNote, id, title, date, content }) {
    let active = false
    activeNote == id ? active = true : active = false

    return (
        <div onClick={() => setActiveNote(id)} className={`${active ? 'bg-white/[10%]' : 'bg-white/[3%]'} hover:bg-white/[10%] cursor-pointer p-[20px] space-y-[10px]`}>
            <h4 className="text-lg font-semibold">{title}</h4>
            <div className="flex gap-[10px] text-md">
                <p className="text-white/40">{date}</p>
                <p className="text-white/60 truncate">{content}</p>
            </div>
        </div>
    )
}