const { convert } = require('html-to-text');

export default function Note({ activeNote, setActiveNote, _id, title, date, content }) {
    let active = false
    activeNote == _id ? active = true : active = false
    const contentPlain = convert(content, {
        wordwrap: 130
    });

    return (
        <div onClick={() => setActiveNote(_id)} className={`${active ? 'bg-white/[10%]' : 'bg-white/[3%]'} hover:bg-white/[10%] cursor-pointer p-[20px] space-y-[10px]`}>
            <h4 className="text-lg font-semibold">{title}</h4>
            <div className="flex gap-[10px] text-md">
                <p className="text-white/40">{date}</p>
                <p className="text-white/60 truncate">{contentPlain}</p>
            </div>
        </div>
    )
}