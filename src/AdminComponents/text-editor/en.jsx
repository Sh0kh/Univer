import { Input } from "@material-tailwind/react";
import React, { useState, useRef, useCallback, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function EnEditor({ value, onChange }) {
    const [content, setContent] = useState();
    const quillRef = useRef(null);


    useEffect(() => {
        setContent(value?.description || "");
    }, [value]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange((prev) => ({ ...prev, [name]: value }));
    };

    const handleQuillChange = useCallback((newContent) => {
        setContent(newContent);
        onChange((prev) => ({ ...prev, description: newContent }));
    }, [onChange]);

    const handleImageUpload = useCallback(() => {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.onchange = () => {
            const file = input.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const quill = quillRef.current.getEditor();
                    const range = quill.getSelection(true); // Получаем текущее выделение или создаем его
                    if (range) {
                        const base64Image = e.target.result;
                        quill.insertEmbed(range.index, "image", base64Image);
                        quill.setSelection(range.index + 1); // Перемещаем курсор после изображения
                    }
                };
                reader.readAsDataURL(file);
            }
        };
    }, []);

    const modules = {
        toolbar: {
            container: [
                [{ header: [1, 2, 3, false] }],
                ["bold", "italic", "underline"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["image", "link"],
            ],
            handlers: {
                image: handleImageUpload,
            },
        },
    };

    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "list",
        "bullet",
        "image",
        "link",
    ];

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
                <ReactQuill
                    ref={quillRef}
                    value={content}
                    onChange={handleQuillChange}
                    modules={modules}
                    formats={formats}
                    placeholder="..."
                    style={{ height: "300px", marginBottom: '50px' }}
                />
            </div>
            <style jsx>{`
        .editor-container :global(.ql-editor) {
          min-height: 300px;
          font-size: 16px;
        }
        .editor-container :global(.ql-container) {
          border-radius: 0 0 4px 4px;
        }
        .editor-container :global(.ql-toolbar) {
          border-radius: 4px 4px 0 0;
        }
        .editor-container :global(.ql-editor img) {
          max-width: 100%;
          height: auto;
        }
      `}</style>
        </div>
    );
}