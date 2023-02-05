import StarIcon from "./icons/more/StarIcon";
import TrashIcon from "./icons/more/TrashIcon";
import ArchiveIcon from "./icons/more/ArchiveIcon";

export default function More() {
    return (
        <>
            <div className=" items-center px-[20px] py-[10px] flex gap-[15px]">
                <StarIcon />
                <h5 className="text-md font-semibold text-white/60">Favorites</h5>
            </div>
            <div className=" items-center px-[20px] py-[10px] flex gap-[15px]">
                <TrashIcon />
                <h5 className="text-md font-semibold text-white/60">Trash</h5>
            </div>
            <div className=" items-center px-[20px] py-[10px] flex gap-[15px]">
                <ArchiveIcon />
                <h5 className="text-md font-semibold text-white/60">Archived Notes</h5>
            </div>
        </>
    )
}