import { Input } from "@material-tailwind/react";
import JoditEditor from "jodit-react";
import React, { useRef, useState } from "react";

export default function RuEditor({ value, onChange }) {
    const editor = useRef(null);
    const [content, setContent] = useState(value?.description || "");

    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange((prev) => ({ ...prev, [name]: value }));
    };

    const handleJoditChange = (newContent) => {
        setContent(newContent);
        onChange((prev) => ({ ...prev, description: newContent }));
    };

    const config = {
        readonly: false,
        height: 400, 
        buttons: [
            "bold", "italic", "underline", "ul", "ol",
            "image", "link", "undo", "redo"
        ],
        uploader: {
            insertImageAsBase64URI: true,
            imagesExtensions: ["jpg", "png", "jpeg", "gif"],
            filesVariableName: "files",
        },
        placeholder: "...",
        events: {
            beforeUpload: (files) => {
                const file = files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        editor.current.selection.insertImage(e.target.result);
                    };
                    reader.readAsDataURL(file);
                }
                return false; 
            },
            afterInsertImage: (img) => {
                img.style.maxWidth = "100%";
                img.style.height = "auto";
            }
        },
        style: {
            fontSize: "16px",
        }
    };

    return (
        <div className="editor-container">
            <div>
                <Input
                    label="Sarlavha"
                    name="title"
                    value={value?.title || ""}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mt-[20px]">
                <JoditEditor
                    ref={editor}
                    value={content}
                    onBlur={handleJoditChange}
                    config={config}
                />
            </div>
            <style jsx>{`
                .editor-container :global(.jodit-wysiwyg) {
                    min-height: 300px;
                }
            `}</style>
        </div>
    );
}