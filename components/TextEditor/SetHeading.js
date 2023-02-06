export default function SetHeading({ editor, setTypography, setTypographyModal, heading }) {
    return (
        <button onClick={() => {
            editor.chain().focus().toggleHeading({ level: 1 }).run()
            setTypography(heading)
            setTypographyModal(false)
        }} className='flex items-center text-md gap-[8px] py-2 px-4 hover:bg-white/20'>
            <p className='w-[105px] text-left'>{heading}</p>
        </button>
    )
}