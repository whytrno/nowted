import DateIcon from "./NoteEditor/icon/DateIcon";
import MoreIcon from "./NoteEditor/icon/MoreIcon";
import FolderIcon from "./sidebar/icons/FolderIcon";
import data from "../data.json"
import TextEditor from "./TextEditor";

export default function NoteEditorActive({ activeFolder, activeNote }) {
    const folderName = data.folders[activeFolder - 1].name
    const note = data.folders[activeFolder - 1].notes[activeNote - 1]

    return (
        <div className="w-[79.17%] p-[50px] space-y-[30px]">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-semibold">{note.title}</h1>
                <button>
                    <MoreIcon />
                </button>
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