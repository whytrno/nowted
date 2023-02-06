import { useState } from "react"
import Note from "./Note"
import data from "../data.json"

export default function NoteList({ activeFolder, activeNote, setActiveNote }) {
    activeFolder ? activeFolder : activeFolder = 1
    const folderName = data.folders[activeFolder - 1].name
    const notes = data.folders[activeFolder - 1].notes

    return (
        <div className="w-[20.833333%] bg-secondary pt-[30px] space-y-[30px] px-[20px]">
            <h3 className="text-xl font-semibold">{folderName}</h3>
            <div className="space-y-[20px]">
                {notes.map(note => (
                    <Note key={note.title} {...note} setActiveNote={setActiveNote} activeNote={activeNote} />
                ))}
            </div>
        </div>
    )
}