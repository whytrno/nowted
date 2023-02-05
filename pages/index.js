import Head from "next/head";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet" />
      </Head>
      <div className="bg-primary min-h-screen flex text-white">
        <Sidebar />
      </div>
    </div>
  )
}