import { Input } from "@material-tailwind/react";
import FroalaEditor from "react-froala-wysiwyg";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/js/plugins/image.min.js";

export default function UzAboutUsCreate({ value, onChange }) {
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
                        placeholderText: "....",
                        toolbarButtons: [
                            "bold", "italic", "underline", "formatOL", "formatUL", "insertImage"
                        ],
                        imageInsertButtons: ["imageUpload"],
                        imageDefaultWidth: 300,
                        imageUpload: true,
                        imageUploadMethod: "base64",
                        heightMin: 300,
                        heightMax: 300,
                        events: {
                            "image.beforeUpload": function (images) {
                                if (images.length) {
                                    const reader = new FileReader();
                                    reader.onload = (e) => {
                                        this.image.insert(e.target.result, null, null, this.image.get());
                                    };
                                    reader.readAsDataURL(images[0]);
                                }
                                return false; // Остановить стандартную загрузку
                            }
                        }
                    }}
                />
            </div>
        </div>
    );
}
