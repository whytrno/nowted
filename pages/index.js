import Head from "next/head";
import React, { useState, useEffect } from "react"
import Sidebar from "@/components/Sidebar";
import NoteList from "@/components/NoteList";
import NoteEditor from "@/components/NoteEditor";
import NoteEditorActive from "@/components/NoteEditorActive";

export default function Home() {
  const [activeFolder, setActiveFolder] = useState(1)
  const [activeNote, setActiveNote] = useState(0)

  useEffect(() => {
    setActiveNote(0)
  }, [activeFolder])

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet" />
      </Head>
      <div className="bg-primary min-h-screen flex text-white font-source">
        <Sidebar setActiveFolder={setActiveFolder} activeFolder={activeFolder} />
        <NoteList activeFolder={activeFolder} activeNote={activeNote} setActiveNote={setActiveNote} />
        {activeNote ? <NoteEditorActive activeFolder={activeFolder} activeNote={activeNote} /> : <NoteEditor />}
      </div>
    </div>
  )
}