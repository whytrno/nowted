import { useEffect, useState } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import Gapcursor from '@tiptap/extension-gapcursor'
import Underline from '@tiptap/extension-underline'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'

import StarterKit from '@tiptap/starter-kit'
import BoldIcon from './TextEditor/icon/BoldIcon'
import DownIcon from './TextEditor/icon/DownIcon'
import ImageIcon from './TextEditor/icon/ImageIcon'
import ItalicIcon from './TextEditor/icon/ItalicIcon'
import LinkIcon from './TextEditor/icon/LinkIcon'
import TableIcon from './TextEditor/icon/TableIcon'
import UnderlineIcon from './TextEditor/icon/UnderlineIcon'

export default function TextEditor({ content }) {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Gapcursor,
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
        content: content,
    })

    return (
        <>
            <div className='py-[10px] flex gap-[30px] border-y-[1px] border-white/10'>
                <button className='flex items-center text-md gap-[8px]'>
                    <p className='w-[105px] text-left'>Paragraph</p>
                    <DownIcon />
                </button>
                <button className='flex items-center text-md gap-[8px]'>
                    <p>16</p>
                    <DownIcon />
                </button>
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
                    <button>
                        <ImageIcon />
                    </button>
                    <button>
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