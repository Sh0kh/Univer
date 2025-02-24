import { Input } from "@material-tailwind/react";
import FroalaEditor from "react-froala-wysiwyg";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/js/plugins/image.min.js";

export default function RuAboutUsCreate({ value, onChange }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange((prev) => ({ ...prev, [name]: value }));
    };

    const handleFroalaChange = (content) => {
        onChange((prev) => ({ ...prev, description: content }));
    };

    return (
        <div>
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
                <FroalaEditor
                    tag="textarea"
                    model={value?.description || ""}
                    onModelChange={handleFroalaChange}
                    config={{
                        placeholderText: "Начни писать...",
                        toolbarButtons: [
                            "bold", "italic", "underline", "formatOL", "formatUL", "insertImage"
                        ],
                        imageInsertButtons: ["imageUpload"],
                        imageDefaultWidth: 300,
                        imageUpload: true,
                        imageUploadMethod: "base64",
                        heightMin: 300,
                        heightMax: 300
                    }}
                />
            </div>
        </div>
    );
}