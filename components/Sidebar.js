import Recent from "./sidebar/Recent"
import Folder from "./sidebar/Folder"
import FolderPlusIcon from "./sidebar/icons/FolderPlusIcon"
import More from "./sidebar/More"

export default function Sidebar() {
    const recents = [
        {
            active: true,
            title: "Reflection on the Month of June",
        },
        {
            active: false,
            title: "Project proposal",
        },
        {
            active: false,
            title: "Travel itinerary",
        },
    ]

    const folders = [
        {
            active: true,
            name: "Personal",
        },
        {
            active: false,
            name: "Work",
        },
        {
            active: false,
            name: "Travel",
        },
        {
            active: false,
            name: "Events",
        },
        {
            active: false,
            name: "Finances",
        }
    ]

    return (
        <div className="w-2.5/12 pt-[30px] space-y-[30px] px-[20px]">
            <div className="flex justify-between">
                <h1 className="font-kaushan flex text-logo gap-[10px]">
                    Nowted
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_18_204)">
                            <path d="M10.625 1.87501C10.7892 1.71085 10.984 1.58064 11.1985 1.4918C11.413 1.40296 11.6429 1.35724 11.875 1.35724C12.1071 1.35724 12.337 1.40296 12.5515 1.4918C12.766 1.58064 12.9608 1.71085 13.125 1.87501C13.2892 2.03916 13.4194 2.23404 13.5082 2.44851C13.597 2.66299 13.6428 2.89286 13.6428 3.12501C13.6428 3.35715 13.597 3.58703 13.5082 3.8015C13.4194 4.01598 13.2892 4.21085 13.125 4.37501L4.6875 12.8125L1.25 13.75L2.1875 10.3125L10.625 1.87501Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_18_204">
                                <rect width="15" height="15" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </h1>
                <button>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.4">
                            <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17.5 17.5L13.875 13.875" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </svg>
                </button>
            </div>
            <div className="space-y-[8px]">
                <h4 className="font-semibold text-sm text-white/60">Recents</h4>
                {recents.map(recent => (
                    <Recent active={recent.active} title={recent.title} />
                ))}
            </div>
            <div className="space-y-[8px]">
                <div className="flex justify-between">
                    <h4 className="font-semibold text-sm text-white/60">Folders</h4>
                    <button>
                        <FolderPlusIcon />
                    </button>
                </div>
                {folders.map(folder => (
                    <Folder key={folder.name} active={folder.active} name={folder.name} />
                ))}
            </div>
            <div className="space-y-[8px]">
                <h4 className="font-semibold text-sm text-white/60">More</h4>
                <More />
            </div>
        </div>
    )
}