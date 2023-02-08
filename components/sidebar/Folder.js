import FolderActiveIcon from "./icons/FolderActiveIcon";
import FolderIcon from "./icons/FolderIcon";

export default function Folder({ _id, activeFolder, name, setActiveFolder, setActiveNote }) {
    let active = false

    activeFolder == _id ? active = true : active = false

    return (
        <div onClick={() => {
            setActiveFolder(_id)
            setActiveNote(0)
        }} className={`${active && 'bg-white bg-opacity-[0.03] hover:bg-blue-500'} hover:bg-white hover:bg-opacity-[0.03] px-[20px] flex gap-[15px] items-center py-[10px] cursor-pointer`}>
            {active ? <FolderActiveIcon /> : <FolderIcon />}
            <h5 className={`${!active && 'text-white/60'} font-semibold text-md`}>{name}</h5>
        </div>
    )
}