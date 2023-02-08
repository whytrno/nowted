import Head from "next/head";
import React, { useState, useEffect } from "react"
import Sidebar from "@/components/Sidebar";
import NoteList from "@/components/NoteList";
import NoteEditor from "@/components/NoteEditor";
import NoteEditorActive from "@/components/NoteEditorActive";
import CloseIcon from "@/components/icon/CloseIcon";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/users")
  const userDataRaw = await res.json()

  return {
    props: {
      userDataRaw,
    },
  }
}

export default function Home({ userDataRaw }) {
  const [activeFolder, setActiveFolder] = useState(userDataRaw.folders[0]._id)
  const [activeNote, setActiveNote] = useState(0)
  const [userData, setUserData] = useState(userDataRaw)
  const [notification, setNotification] = useState(false)
  const [message, setMessage] = useState("")
  const [shortcutModal, setShortcutModal] = useState(false)

  useEffect(() => {
    // if notification true, it will close after 1 sec
    if (notification) {
      setTimeout(() => {
        setNotification(false)
      }, 1000)
    }
  }, [notification])

  const fetchData = async (messagePassed) => {
    const res = await fetch("http://localhost:3000/api/users")
    const userData = await res.json()

    setUserData(userData)

    setMessage(messagePassed)
    setNotification(true)
  };

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet" />
        <title>Nowted 📖</title>
      </Head>
      <div className="bg-primary min-h-screen flex text-white font-source relative">
        <div className={`${notification ? 'top-5' : '-top-40'} transition-all absolute left-0 w-full flex justify-center items-start`}>
          <div className="relative bg-recent-active w-96 z-50 rounded-[6px] flex items-center">
            <button className="absolute top-3 right-3" onClick={() => setNotification(false)}>
              <CloseIcon />
            </button>
            <p className="p-10 text-lg font-semibold">{message}</p>
          </div>
        </div>
        {shortcutModal && (
          <div className="absolute top-0 left-0 w-full h-full z-50 flex items-center justify-center">
            <div className="relative bg-recent-active rounded-[6px]">
              <button onClick={() => setShortcutModal(false)} className="absolute top-3 right-3">
                <CloseIcon />
              </button>
              <div className="p-10 space-y-8">
                <h1 className="text-center text-xl font-semibold">SHORTCUT</h1>
                <div className="flex gap-10">
                  <ul className="space-y-5">
                    <li className="flex justify-between items-center gap-5">
                      <p className="text-sm p-2 bg-primary w-min rounded-[6px] whitespace-nowrap">CTRL + S</p>
                      <p className="font-semibold">Save Note</p>
                    </li>
                    <li className="flex justify-between items-center gap-5">
                      <p className="text-sm p-2 bg-primary w-min rounded-[6px] whitespace-nowrap">CTRL + I</p>
                      <p className="font-semibold">Italic</p>
                    </li>
                    <li className="flex justify-between items-center gap-5">
                      <p className="text-sm p-2 bg-primary w-min rounded-[6px] whitespace-nowrap">CTRL + U</p>
                      <p className="font-semibold">Underline</p>
                    </li>
                    <li className="flex justify-between items-center gap-5">
                      <p className="text-sm p-2 bg-primary w-min rounded-[6px] whitespace-nowrap">CTRL + B</p>
                      <p className="font-semibold">Bold</p>
                    </li>
                  </ul>
                  <ul className="space-y-5">
                    <li className="flex justify-between items-center gap-5">
                      <p className="text-sm p-2 bg-primary w-min rounded-[6px] whitespace-nowrap">CTRL + ALT + 1</p>
                      <p className="font-semibold">Heading 1</p>
                    </li>
                    <li className="flex justify-between items-center gap-5">
                      <p className="text-sm p-2 bg-primary w-min rounded-[6px] whitespace-nowrap">CTRL + ALT + 2</p>
                      <p className="font-semibold">Heading 2</p>
                    </li>
                    <li className="flex justify-between items-center gap-5">
                      <p className="text-sm p-2 bg-primary w-min rounded-[6px] whitespace-nowrap">CTRL + ALT + 3</p>
                      <p className="font-semibold">Heading 3</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        <Sidebar setShortcutModal={setShortcutModal} fetchData={fetchData} userData={userData} setUserData={setUserData} setActiveFolder={setActiveFolder} activeFolder={activeFolder} setActiveNote={setActiveNote} />
        <NoteList userData={userData} activeFolder={activeFolder} activeNote={activeNote} setActiveNote={setActiveNote} />
        {activeNote ? <NoteEditorActive userData={userData} activeFolder={activeFolder} activeNote={activeNote} fetchData={fetchData} /> : <NoteEditor />}
      </div>
    </div>
  )
}