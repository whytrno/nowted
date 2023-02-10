import StarIcon from "./icons/more/StarIcon";
import TrashIcon from "./icons/more/TrashIcon";
import ArchiveIcon from "./icons/more/ArchiveIcon";
import ShortcutIcon from "../icon/ShortcutIcon";
import UserIcon from "./icons/UserIcon";

export default function More({ signOut, loggedIn, setShortcutModal, session }) {
    const moreClass = "items-center px-[20px] py-[10px] flex gap-[15px] cursor-pointer hover:bg-white hover:bg-opacity-[0.03]"

    return (
        <>
            <div className={moreClass} onClick={() => setShortcutModal(true)}>
                <ShortcutIcon />
                <h5 className="text-md font-semibold text-white/60">Shortcut</h5>
            </div>
            <div className={moreClass}>
                <StarIcon />
                <h5 className="text-md font-semibold text-white/60">Favorites</h5>
            </div>
            <div className={moreClass}>
                <TrashIcon />
                <h5 className="text-md font-semibold text-white/60">Trash</h5>
            </div>
            <div className={moreClass}>
                <ArchiveIcon />
                <h5 className="text-md font-semibold text-white/60">Archived Notes</h5>
            </div>
            {loggedIn && (
                <div onClick={() => signOut()} className={moreClass}>
                    <UserIcon />
                    <h5 className="text-md font-semibold text-white/60">{session.user.email}</h5>
                </div>
            )}
        </>
    )
}