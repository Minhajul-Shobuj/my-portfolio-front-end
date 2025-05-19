/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { useEffect } from "react";

interface TextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const TextEditor = ({ value, onChange }: TextEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: false,
        orderedList: false,
        listItem: false,
      }),
      Paragraph,
      Text,
      BulletList,
      OrderedList,
      ListItem,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: value,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "min-h-[300px] border rounded-md p-4 focus:outline-none max-w-none list-disc list-inside",
      },
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [value]);

  if (!editor) return null;

  const baseBtn = "px-2 py-1 text-sm rounded hover:bg-gray-200 transition";
  const activeBtn = "bg-blue-100 text-blue-700 font-semibold";

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2 border-b pb-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`${baseBtn} ${editor.isActive("bold") ? activeBtn : ""}`}
        >
          Bold
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`${baseBtn} ${editor.isActive("italic") ? activeBtn : ""}`}
        >
          Italic
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`${baseBtn} ${
            editor.isActive("underline") ? activeBtn : ""
          }`}
        >
          Underline
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`${baseBtn} ${
            editor.isActive("heading", { level: 1 }) ? activeBtn : ""
          }`}
        >
          H1
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`${baseBtn} ${
            editor.isActive("heading", { level: 2 }) ? activeBtn : ""
          }`}
        >
          H2
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`${baseBtn} ${
            editor.isActive("bulletList") ? activeBtn : ""
          }`}
        >
          • List
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`${baseBtn} ${
            editor.isActive("orderedList") ? activeBtn : ""
          }`}
        >
          1. List
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={`${baseBtn} ${
            editor.isActive({ textAlign: "left" }) ? activeBtn : ""
          }`}
        >
          Left
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={`${baseBtn} ${
            editor.isActive({ textAlign: "center" }) ? activeBtn : ""
          }`}
        >
          Center
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={`${baseBtn} ${
            editor.isActive({ textAlign: "right" }) ? activeBtn : ""
          }`}
        >
          Right
        </button>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
};

export default TextEditor;
