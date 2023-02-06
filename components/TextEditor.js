import { useEffect, useState, useCallback } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import Underline from '@tiptap/extension-underline'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'

import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import FontSize from 'tiptap-extension-font-size'
import TextStyle from '@tiptap/extension-text-style'
import BoldIcon from './TextEditor/icon/BoldIcon'
import DownIcon from './TextEditor/icon/DownIcon'
import ImageIcon from './TextEditor/icon/ImageIcon'
import ItalicIcon from './TextEditor/icon/ItalicIcon'
import LinkIcon from './TextEditor/icon/LinkIcon'
import TableIcon from './TextEditor/icon/TableIcon'
import UnderlineIcon from './TextEditor/icon/UnderlineIcon'

import SetHeading from './TextEditor/SetHeading'
import SetFontSize from './TextEditor/SetFontSize'

export default function TextEditor({ content }) {
    const [typographyModal, setTypographyModal] = useState(false)
    const [typography, setTypography] = useState("Paragraph")

    const [fontSizeModal, setFontSizeModal] = useState(false)
    const [fontSize, setFontSize] = useState("16")
    const fontSizeList = [
        "14px",
        "16px",
        "18px",
        "22px",
        "28px",
        "32px"
    ]

    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            FontSize,
            TextStyle,
            Image,
            Link.configure({
                openOnClick: false,
            }),
            Table.configure({
                HTMLAttributes: {
                    class: 'bg-white text-blue-500',
                },
                resizable: true,
            }),
            TableRow,
            TableHeader,
            TableCell,
        ],
        content
    })

    const setLink = useCallback(() => {
        const previousUrl = editor.getAttributes('link').href
        const url = window.prompt('URL', previousUrl)

        // cancelled
        if (url === null) {
            return
        }

        // empty
        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink()
                .run()

            return
        }

        // update link
        editor.chain().focus().extendMarkRange('link').setLink({ href: url })
            .run()
    }, [editor])

    const addImage = useCallback(() => {
        const url = window.prompt('URL')

        if (url) {
            editor.chain().focus().setImage({ src: url }).run()
        }
    }, [editor])

    useEffect(() => {
        if (editor) editor.commands.setContent(content)
    }, [content])

    return (
        <>
            <div className='py-[10px] flex gap-[30px] border-y-[1px] border-white/10'>
                <div className='relative'>
                    <button onClick={() => setTypographyModal(!typographyModal)} className='flex items-center text-md gap-[8px]'>
                        <p className='w-[105px] text-left'>{typography}</p>
                        <DownIcon />
                    </button>
                    {typographyModal && (
                        <div className='absolute top-10 left-0 bg-note-active space-y-3 z-50 rounded-[6px]'>
                            <SetHeading editor={editor} setTypography={setTypography} setTypographyModal={setTypographyModal} heading="Heading 1" />
                            <SetHeading editor={editor} setTypography={setTypography} setTypographyModal={setTypographyModal} heading="Heading 2" />
                            <SetHeading editor={editor} setTypography={setTypography} setTypographyModal={setTypographyModal} heading="Heading 3" />
                            <button onClick={() => {
                                editor.commands.setParagraph()
                                setTypography("Paragraph")
                                setTypographyModal(false)
                            }} className='flex items-center text-md gap-[8px] py-2 px-4 hover:bg-white/20'>
                                <p className='w-[105px] text-left'>Paragraph</p>
                            </button>
                        </div>
                    )}
                </div>
                <div className='relative'>
                    <button onClick={() => setFontSizeModal(!fontSizeModal)} className='flex items-center text-md gap-[8px]'>
                        <p>{fontSize}</p>
                        <DownIcon />
                    </button>
                    {fontSizeModal && (
                        <div className='absolute top-10 left-0 bg-note-active space-y-3 z-50 rounded-[6px]'>
                            {fontSizeList.map((fontSize, index) => (
                                <SetFontSize key="fontSize" editor={editor} setFontSize={setFontSize} setFontSizeModal={setFontSizeModal} fontSize={fontSize} />
                            ))}
                        </div>
                    )}
                </div>
                <div className='flex gap-[10px]'>
                    <button onClick={() => editor.chain().focus().toggleBold().run()}>
                        <BoldIcon />
                    </button>
                    <button onClick={() => editor.chain().focus().toggleItalic().run()}>
                        <ItalicIcon />
                    </button>
                    <button onClick={() => editor.chain().focus().toggleUnderline().run()}>
                        <UnderlineIcon />
                    </button>
                </div>
                <div className='flex gap-[10px]'>
                    <button onClick={addImage}>
                        <ImageIcon />
                    </button>
                    <button onClick={setLink}>
                        <LinkIcon />
                    </button>
                </div>
                <button onClick={() => editor.chain().focus().insertTable({ rows: 5, cols: 5, withHeaderRow: true }).run()}>
                    <TableIcon />
                </button>
            </div>
            <div>
                <EditorContent editor={editor} />
            </div>
        </>
    )
}