"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { useEffect } from "react"

interface Props {
    value: string
    onChange: (html: string) => void
}

export default function RichTextEditor({ value, onChange }: Props) {
    const editor = useEditor({
        extensions: [StarterKit],
        content: value,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML())
        },
        editorProps: {
            attributes: {
                class: "min-h-[200px] focus:outline-none",
            },
        },
        autofocus: false,
        editable: true,
        injectCSS: true,
        immediatelyRender: false,
    })

    useEffect(() => {
        if (editor && value !== editor.getHTML()) {
            editor.commands.setContent(value)
        }
    }, [value, editor])

    return (
        <div className="border rounded p-2">
            <EditorContent editor={editor} className="prose max-w-none" />
        </div>
    )
}
