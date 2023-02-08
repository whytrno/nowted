import NoteBigIcon from "./icon/NoteBigIcon";

export default function NoteEditor() {
    return (
        <div className="flex flex-col items-center justify-center gap-[10px] 2xl:col-span-8 sm:col-span-6">
            <NoteBigIcon />
            <h1 className="text-2xl font-semibold">Select a note to view</h1>
            <h2 className="text-white/60 text-md w-[460px] text-center">Choose a note from the list on the left to view its contents, or create a new note to add to your collection.</h2>
        </div>
    )
}