"use client";

import { FiBold } from "react-icons/fi";
import { FiItalic } from "react-icons/fi";
import { LuStrikethrough } from "react-icons/lu";
import { PiParagraph } from "react-icons/pi";
import { RiH1 } from "react-icons/ri";
import { RiH2 } from "react-icons/ri";
import { RiH3 } from "react-icons/ri";
import { RiH4 } from "react-icons/ri";
import { RiH5 } from "react-icons/ri";
import { RiH6 } from "react-icons/ri";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { GoListOrdered } from "react-icons/go";
import { BsBlockquoteLeft } from "react-icons/bs";
import { VscHorizontalRule } from "react-icons/vsc";
import { LuUndo2 } from "react-icons/lu";
import { LuRedo2 } from "react-icons/lu";
import { FaSquare } from "react-icons/fa";

export default function MenuBar({ editor }) {
  if (!editor) {
    return null;
  }
  return (
    <>
      <div className="control-group border border-b-0 border-gray-400 rounded-t-md">
        <div className="button-group flex flex-wrap">
          <div className="btn-group-one flex items-center p-2 text-gray-400 text-2xl justify-between w-full lg:w-[50%]">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              disabled={!editor.can().chain().focus().toggleBold().run()}
              className={`cursor-pointer ${
                editor.isActive("bold") ? "is-active text-orange-400" : ""
              }`}
            >
              <FiBold />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              disabled={!editor.can().chain().focus().toggleItalic().run()}
              className={`cursor-pointer ${
                editor.isActive("italic") ? "is-active text-orange-400" : ""
              }`}
            >
              <FiItalic />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              disabled={!editor.can().chain().focus().toggleStrike().run()}
              className={`cursor-pointer ${
                editor.isActive("strike") ? "is-active text-orange-400" : ""
              }`}
            >
              <LuStrikethrough />
            </button>
            <button
              onClick={() => editor.chain().focus().setParagraph().run()}
              className={`cursor-pointer ${
                editor.isActive("paragraph") ? "is-active text-orange-400" : ""
              }`}
            >
              <PiParagraph />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              className={`cursor-pointer 
              ${
                editor.isActive("heading", { level: 1 })
                  ? "is-active text-orange-400"
                  : ""
              }
            `}
            >
              <RiH1 />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              className={`cursor-pointer 
              ${
                editor.isActive("heading", { level: 2 })
                  ? "is-active text-orange-400"
                  : ""
              }
            `}
            >
              <RiH2 />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
              className={`cursor-pointer  
              ${
                editor.isActive("heading", { level: 3 })
                  ? "is-active text-orange-400"
                  : ""
              }
            `}
            >
              <RiH3 />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 4 }).run()
              }
              className={`cursor-pointer 
              ${
                editor.isActive("heading", { level: 4 })
                  ? "is-active text-orange-400"
                  : ""
              }
            `}
            >
              <RiH4 />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 5 }).run()
              }
              className={`cursor-pointer 
              ${
                editor.isActive("heading", { level: 5 })
                  ? "is-active text-orange-400"
                  : ""
              }
            `}
            >
              <RiH5 />
            </button>
          </div>
          <div className="btn-group-two flex items-center p-2 text-gray-400 text-2xl justify-between w-full lg:w-[50%] lg:pl-10">
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 6 }).run()
              }
              className={`cursor-pointer 
              ${
                editor.isActive("heading", { level: 6 })
                  ? "is-active text-orange-400"
                  : ""
              }
            `}
            >
              <RiH6 />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={`cursor-pointer ${
                editor.isActive("bulletList") ? "is-active text-orange-400" : ""
              }`}
            >
              <MdOutlineFormatListBulleted />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={`cursor-pointer ${
                editor.isActive("orderedList")
                  ? "is-active text-orange-400"
                  : ""
              }`}
            >
              <GoListOrdered />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              className={`cursor-pointer ${
                editor.isActive("blockquote") ? "is-active text-orange-400" : ""
              }`}
            >
              <BsBlockquoteLeft />
            </button>
            <button
              onClick={() => editor.chain().focus().setHorizontalRule().run()}
              className="cursor-pointer"
            >
              <VscHorizontalRule />
            </button>
            <button
              onClick={() => editor.chain().focus().undo().run()}
              disabled={!editor.can().chain().focus().undo().run()}
              className="cursor-pointer"
            >
              <LuUndo2 />
            </button>
            <button
              onClick={() => editor.chain().focus().redo().run()}
              disabled={!editor.can().chain().focus().redo().run()}
              className="cursor-pointer"
            >
              <LuRedo2 />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().setColor("oklch(75% 0.183 55.934)").run()
              }
              className={`cursor-pointer 
              ${
                editor.isActive("textStyle", {
                  color: "oklch(75% 0.183 55.934)",
                })
                  ? "is-active text-orange-400"
                  : ""
              }
            `}
            >
              <FaSquare className="text-orange-400" />
            </button>
            <button
              onClick={() =>
                editor
                  .chain()
                  .focus()
                  .setColor("oklch(70.7% 0.022 261.325)")
                  .run()
              }
              className={`cursor-pointer 
              ${
                editor.isActive("textStyle", {
                  color: "oklch(70.7% 0.022 261.325)",
                })
                  ? "is-active text-orange-400"
                  : ""
              }
            `}
            >
              <FaSquare className="text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
