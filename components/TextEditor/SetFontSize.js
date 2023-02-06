export default function setFontSize({ editor, setFontSize, setFontSizeModal, fontSize }) {
    const fontSizePass = fontSize.split('px')[0]

    return (
        <button onClick={() => {
            editor.chain().focus().setFontSize(fontSize).run()
            setFontSize(fontSizePass)
            setFontSizeModal(false)
        }} className='flex items-center text-md gap-[8px] py-2 px-4 hover:bg-white/20'>
            <p className='text-left'>{fontSize}</p>
        </button>
    )
}