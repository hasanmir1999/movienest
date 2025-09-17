"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Color from '@tiptap/extension-color'
import {TextStyle} from '@tiptap/extension-text-style'
import MenuBar from "./MenuBar";
import { useEffect } from "react";

const Tiptap = ({formData , setFormData , initialContent}) => {
  const editor = useEditor({
    extensions: [StarterKit, Color , TextStyle],
    content: initialContent || "",
    immediatelyRender: false,
    onUpdate:  ({ editor }) => {
      setFormData({ ...formData, text: editor.getHTML() })
    },
    editorProps: {
      attributes: {
        class:
          "border border-gray-400 w-full min-h-[300px] rounded-md p-5 outline-none caret-orange-400 text-gray-400",
      },
    },
  });
  useEffect(() => {
  if (editor && initialContent) {
    editor.commands.setContent(initialContent);
  }
}, [initialContent, editor]);


  return (
    <>
      <div className="texteditor flex flex-col tiptap">
        <MenuBar editor={editor} />
        <EditorContent editor={editor} />
      </div>
    </>
  );
};


export default Tiptap;
