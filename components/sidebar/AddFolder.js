import { useState, useEffect } from 'react'
import FolderActiveIcon from "./icons/FolderActiveIcon";

export default function AddFolder({ setNewFolderActive, fetchData }) {
    const [folderName, setFolderName] = useState("")

    async function addFolderHandler(e) {
        e.preventDefault();

        const res = await fetch("/api/users/folders/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: folderName
            })
        })
        const data = await res.json()

        if (data.success) {
            await fetchData("Berhasil menambahkan folder")
            setNewFolderActive(false)
        }
    }

    return (
        <form onSubmit={addFolderHandler.bind(this)} className={`px-[20px] flex gap-[15px] items-center py-[10px] cursor-pointer`}>
            <FolderActiveIcon />
            <input onChange={(e) => setFolderName(e.target.value)} className={`font-semibold text-md bg-transparent`} placeholder="New Folder Name" autoFocus />
        </form>
    )
}