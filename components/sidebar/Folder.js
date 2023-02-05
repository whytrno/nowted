import FolderActiveIcon from "./icons/FolderActiveIcon";
import FolderIcon from "./icons/FolderIcon";

export default function Folder({ active, name }) {
    return (
        <div className={`${active && 'bg-white bg-opacity-[0.03]'} flex gap-[15px] items-center px-[20px] py-[10px]`}>
            {active ? <FolderActiveIcon /> : <FolderIcon />}
            <h5 className={`${!active && 'text-white/60'} font-semibold text-md`}>{name}</h5>
        </div>
    )
}