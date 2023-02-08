import Note from "./Note"

export default function NoteList({ activeFolder, activeNote, setActiveNote, userData }) {
    activeFolder ? activeFolder : activeFolder = 0

    const folderFilter = userData.folders.filter(folder => folder._id == activeFolder)
    const folderName = folderFilter[0].name
    let notes = folderFilter[0].notes

    if (!notes) notes = []

    return (
        // 2xl:w-[20.833333%] sm:w-[30%]
        <div className="bg-secondary pt-[30px] space-y-[30px] px-[20px] 2xl:col-span-2 sm:col-span-3 max-h-screen grid grid-rows-12">
            <h3 className="text-xl font-semibold row-span-1">{folderName}</h3>
            <div className="space-y-[20px] overflow-auto row-span-11">
                {notes.map(note => (
                    <Note key={note._id} {...note} setActiveNote={setActiveNote} activeNote={activeNote} />
                ))}
            </div>
        </div>
    )
}