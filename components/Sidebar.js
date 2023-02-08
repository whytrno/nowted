import React, { useState } from "react"
import Recent from "./sidebar/Recent"
import Folder from "./sidebar/Folder"
import FolderPlusIcon from "./sidebar/icons/FolderPlusIcon"
import More from "./sidebar/More"
import PlusIcon from "./icon/PlusIcon"
import SearchIcon from "./sidebar/icons/SearchIcon"
import AddFolder from "./sidebar/AddFolder"

export default function Sidebar({ activeFolder, setActiveFolder, userData, setActiveNote, fetchData, setShortcutModal }) {
    const [searchActive, setSearchActive] = useState(false)
    const [newFolderActive, setNewFolderActive] = useState(false)

    const folders = userData.folders

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

    async function addNoteHandler(e) {
        e.preventDefault()

        const folderId = activeFolder

        const res = await fetch(`/api/users/notes/create/${folderId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
        })
        const data = await res.json()

        await fetchData("Berhasil menambahkan catatan baru")

        // console.log(data)
        // setActiveNote(data.note._id)
    }

    return (
        // 2xl:w-[20.833333%] sm:w-[30%]
        <div className="flex flex-col gap-[30px] max-h-screen justify-between py-[30px] 2xl:col-span-2 sm:col-span-3">
            <div className="space-y-[30px]">
                <div className="flex justify-between px-[20px]">
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
                    <SearchIcon setSearchActive={setSearchActive} searchActive={searchActive} />
                </div>
                {searchActive ? (
                    <div className="px-[20px] transition-all">
                        <div className="px-[10px] flex gap-[8px] bg-white/5 rounded-[3px]">
                            <SearchIcon />
                            <input type="text" placeholder="Search Note" className="py-[10px] bg-transparent text-white/60 font-semibold text-md" />
                        </div>
                    </div>
                ) : (
                    <div className="px-[20px]">
                        <button onClick={addNoteHandler} className="flex gap-[8px] w-full p-[10px] items-center justify-center bg-white/5 rounded-[3px]">
                            <PlusIcon />
                            New Note
                        </button>
                    </div>
                )}
                <div className="space-y-[8px]">
                    <h4 className="font-semibold text-sm text-white/60 px-[20px]">Recents</h4>
                    {recents.map(recent => (
                        <Recent key={recent.title} {...recent} />
                    ))}
                </div>
                <div className="space-y-[8px]">
                    <div className="flex justify-between px-[20px]">
                        <h4 className="font-semibold text-sm text-white/60">Folders</h4>
                        <button>
                            <FolderPlusIcon setNewFolderActive={setNewFolderActive} newFolderActive={newFolderActive} />
                        </button>
                    </div>
                    <div className="max-h-52 overflow-auto">
                        {newFolderActive && (
                            <AddFolder fetchData={fetchData} newFolderActive={newFolderActive} setNewFolderActive={setNewFolderActive} folders={folders} />
                        )}
                        {folders.map((folder, index) => (
                            <Folder key={index} {...folder} setActiveFolder={setActiveFolder} activeFolder={activeFolder} setActiveNote={setActiveNote} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="space-y-[8px]">
                <h4 className="font-semibold text-sm text-white/60 px-[20px]">More</h4>
                <More setShortcutModal={setShortcutModal} />
            </div>
        </div>
    )
}