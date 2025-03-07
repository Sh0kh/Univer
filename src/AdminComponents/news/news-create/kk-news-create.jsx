import { Input, Textarea } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";

// Используем lazy loading для TinyMCE
const TinyEditor = React.lazy(() => {
    return Promise.all([
        import('@tinymce/tinymce-react'),
    ]).then(([tinymce]) => {
        return { default: tinymce.Editor };
    });
});

export default function KKNewsCreate({ value, onChange }) {
    const [content, setContent] = useState("");
    const [isClientSide, setIsClientSide] = useState(false);

    useEffect(() => {
        setContent(value?.summary || "");
    }, [value]);

    useEffect(() => {
        setIsClientSide(true);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange((prev) => ({ ...prev, [name]: value }));
    };

    const handleEditorChange = (content, editor) => {
        setContent(content);
        onChange((prev) => ({ ...prev, summary: content }));
    };

    const imageUploadHandler = (blobInfo, progress) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                resolve(`data:${blobInfo.blob().type};base64,${btoa(reader.result)}`);
            };
            reader.onerror = () => {
                reject('File read error');
            };
            reader.readAsBinaryString(blobInfo.blob());
        });
    };

    // Обновленная конфигурация TinyMCE с поддержкой таблиц
    const tinyConfig = {
        // ... остальные настройки
        images_upload_handler: imageUploadHandler,
        images_upload_base_path: '/uploads',
        images_reuse_filename: false,
        images_upload_credentials: true,

        // Добавляем плагин table в список плагинов
        plugins: [
            // ... остальные плагины
            'image', 'imagetools', 'uploadimage',
            'table' // Добавлен плагин для таблиц
        ],

        // Обновляем тулбар, добавляя элементы управления таблицами
        toolbar: '... | uploadimage image | table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol | ...',

        // Настройки таблиц
        table_toolbar: 'tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol',
        table_advtab: true, // Расширенные настройки таблицы
        table_row_advtab: true, // Расширенные настройки строк
        table_cell_advtab: true, // Расширенные настройки ячеек
        table_responsive_width: true, // Адаптивная ширина таблиц
        table_default_attributes: {
            border: '1',
            cellspacing: '0',
            cellpadding: '5'
        },

        image_title: true,
        image_caption: true,
        image_advtab: true,
        image_uploadtab: true,
        paste_data_images: true,

        images_upload_handler: (blobInfo, progress, failure) => {
            return imageUploadHandler(blobInfo, progress)
                .catch((error) => {
                    failure('Ошибка загрузки: ' + error);
                    return Promise.reject(error);
                });
        }
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
                <Textarea
                    label="Malumot"
                    name="description"
                    value={value?.description || ""}
                    onChange={handleChange}
                    required
                />

                <div className="mt-[20px] editor-container">
                    {isClientSide && (
                        <React.Suspense fallback={
                            <div
                                style={{
                                    height: "500px",
                                    border: "1px solid #ccc",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "#f8f8f8"
                                }}
                            >
                                Загрузка редактора...
                            </div>
                        }>
                            <TinyEditor
                                value={content}
                                onEditorChange={handleEditorChange}
                                init={tinyConfig}
                                apiKey="uasuprzk1immui9sxj0xnzt7l74ohv7hz0ldooxfls1rcw0s"
                            />
                        </React.Suspense>
                    )}
                </div>
            </div>
        </div>
    );
}