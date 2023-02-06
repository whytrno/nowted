import FolderActiveIcon from "./icons/FolderActiveIcon";

export default function AddFolder() {
    return (
        <div className={`px-[20px] flex gap-[15px] items-center py-[10px] cursor-pointer`}>
            <FolderActiveIcon />
            <input className={`font-semibold text-md bg-transparent`} placeholder="New Folder Name" autoFocus />
        </div>
    )
}