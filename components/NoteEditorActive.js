import { useState } from "react";

import DateIcon from "./NoteEditor/icon/DateIcon";
import MoreIcon from "./NoteEditor/icon/MoreIcon";
import FolderIcon from "./sidebar/icons/FolderIcon";
import TextEditor from "./TextEditor";
import StarIcon from "./sidebar/icons/more/StarIcon";
import ArchiveIcon from "./sidebar/icons/more/ArchiveIcon";
import TrashIcon from "./sidebar/icons/more/TrashIcon";

export default function NoteEditorActive({ activeFolder, activeNote, userData, fetchData }) {
    const folderFilter = userData.folders.filter(folder => folder._id == activeFolder)
    const folderName = folderFilter[0].name
    const noteFilter = folderFilter[0].notes.filter(note => note._id == activeNote)
    const note = noteFilter[0]

    const [moreActive, setMoreActive] = useState(false)
    const [changeTitle, setChangeTitle] = useState(false)
    const [changedTitle, setChangedTitle] = useState(note.title)

    async function updateHandler(e) {
        setChangeTitle(false)
        e.preventDefault();

        const id = note._id

        const res = await fetch(`/api/users/notes/update/title/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: changedTitle
            })
        })
        await res.json()

        await fetchData("Berhasil mengubah judul catatan")
    }

    return (
        // 2xl:w-[79.17%] sm:w-[60%]
        <div className="p-[50px] space-y-[30px] 2xl:col-span-8 sm:col-span-6">
            <div className="flex justify-between items-center">
                <h1 onClick={() => setChangeTitle(true)} className={`${changeTitle && 'hidden'} text-3xl font-semibold`}>{note.title}</h1>
                {changeTitle && (
                    <form onSubmit={updateHandler} className="w-3/4">
                        <input type="text" className="bg-transparent text-white/60 text-3xl font-semibold w-full" value={changedTitle} onChange={(e) => setChangedTitle(e.target.value)} />
                    </form>
                )}
                <div onClick={() => setMoreActive(!moreActive)} className="relative cursor-pointer">
                    <MoreIcon active={moreActive} />
                    {moreActive && (
                        <div className="absolute top-10 right-0 z-50 rounded-[6px] w-[202px] bg-[#333333] cursor-default">
                            <div className="flex items-center gap-[15px] cursor-pointer hover:bg-folder-active p-[15px] rounded-t-[6px]">
                                <StarIcon active />
                                <p className="text-md">Add to favorites</p>
                            </div>
                            <div className="flex items-center gap-[15px] cursor-pointer hover:bg-folder-active p-[15px] border-b-[1px] border-white/5">
                                <ArchiveIcon active />
                                <p className="text-md">Archive</p>
                            </div>
                            <div className="flex items-center gap-[15px] pt-[20px] cursor-pointer hover:bg-folder-active p-[15px] rounded-b-[6px]">
                                <TrashIcon active />
                                <p className="text-md">Delete</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="space-y-[15px]">
                <div className="flex gap-[8px] text-sm font-semibold items-center">
                    <div className="w-[30px]">
                        <DateIcon />
                    </div>
                    <h5 className="w-[100px] text-white/60">Date</h5>
                    <h5 className="underline">{note.date}</h5>
                </div>

                <div className="h-[1px] bg-white/10 w-full"></div>

                <div className="flex gap-[8px] text-sm font-semibold items-center">
                    <div className="w-[30px]">
                        <FolderIcon />
                    </div>
                    <h5 className="w-[100px] text-white/60">Folder</h5>
                    <h5 className="underline">{folderName}</h5>
                </div>
            </div>
            <TextEditor fetchData={fetchData} id={note._id} content={note.content} />
        </div>
    )
}