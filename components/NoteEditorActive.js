import { useState } from "react";

import DateIcon from "./NoteEditor/icon/DateIcon";
import MoreIcon from "./NoteEditor/icon/MoreIcon";
import FolderIcon from "./sidebar/icons/FolderIcon";
import data from "../data.json"
import TextEditor from "./TextEditor";
import StarIcon from "./sidebar/icons/more/StarIcon";
import ArchiveIcon from "./sidebar/icons/more/ArchiveIcon";
import TrashIcon from "./sidebar/icons/more/TrashIcon";

export default function NoteEditorActive({ activeFolder, activeNote }) {
    const folderName = data.folders[activeFolder - 1].name
    const note = data.folders[activeFolder - 1].notes[activeNote - 1]
    const [moreActive, setMoreActive] = useState(false)

    return (
        <div className="w-[79.17%] p-[50px] space-y-[30px]">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-semibold">{note.title}</h1>
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
            <TextEditor content={note.content} />
        </div>
    )
}