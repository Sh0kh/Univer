import { Input } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";

// Используем lazy loading для Froala
const FroalaEditor = React.lazy(() => {
    // Импортируем все необходимые модули Froala более надежным способом
    return Promise.all([
        import('froala-editor/js/froala_editor.pkgd.min.js'),
        import('froala-editor/js/plugins/image.min.js'),
        import('froala-editor/js/plugins/table.min.js'),
        import('froala-editor/js/plugins/link.min.js'),
        import('froala-editor/js/plugins/paragraph_format.min.js'),
        import('froala-editor/js/plugins/align.min.js'),
        import('froala-editor/js/plugins/lists.min.js'),
        import('froala-editor/css/froala_editor.pkgd.min.css'),
        import('froala-editor/css/froala_style.min.css')
    ]).then(() => import('react-froala-wysiwyg'));
});

export default function EnEditor({ value, onChange }) {
    const [content, setContent] = useState("");
    const [isClientSide, setIsClientSide] = useState(false);

    // Устанавливаем значение при изменении props
    useEffect(() => {
        setContent(value?.description || "");
    }, [value]);

    // Убедимся, что мы на стороне клиента перед рендерингом Froala
    useEffect(() => {
        setIsClientSide(true);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange((prev) => ({ ...prev, [name]: value }));
    };

    const handleEditorChange = (model) => {
        setContent(model);
        onChange((prev) => ({ ...prev, description: model }));
    };

    // Конфигурация для Froala Editor
    const config = {
        placeholderText: '...',
        heightMin: 300,
        attribution: false,
        toolbarButtons: [
            ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript'],
            ['paragraphFormat', 'align', 'lineHeight'],
            ['formatOL', 'formatUL', 'indent', 'outdent'],
            ['insertImage', 'insertTable', 'insertLink', 'insertHR'],
            ['undo', 'redo', 'clearFormatting'],
            ['html'] // Добавляем кнопку просмотра HTML для отладки
        ],
        // Настройка загрузки изображений
        imageUploadToS3: false,
        imageUpload: true,
        imageAllowedTypes: ['jpeg', 'jpg', 'png', 'gif'],
        imageDefaultWidth: 0,
        events: {
            'image.beforeUpload': function (images) {
                if (images.length) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        this.image.insert(e.target.result, null, null, this.image.get());
                    };
                    reader.readAsDataURL(images[0]);
                    return false; // Возвращаем false только здесь, чтобы отменить стандартную загрузку
                }
            },
            'initialized': function () {
                console.log('Froala Editor initialized'); // Для отладки
            },
            'focus': function () {
                console.log('Editor is focused'); // Для отладки событий фокуса
            },
            'blur': function () {
                console.log('Editor lost focus'); // Для отладки событий потери фокуса
            }
        },
        // Настройка таблиц
        tableInsertMaxSize: 10,
        tableStyles: {
            'table-bordered': 'Bordered Table',
            'table-striped': 'Striped Table'
        },
        // Дополнительные настройки для улучшения отзывчивости
        zIndex: 9999,
        iframe: false, // Используем div вместо iframe для лучшей производительности
        useClasses: false,
        spellcheck: true,
        tableResizer: true,
        tableResizerOffset: 10,
        tableResizingLimit: 50
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

            <div className="mt-5">
                {isClientSide && (
                    <React.Suspense fallback={
                        <div
                            style={{
                                height: "300px",
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
                        <FroalaEditor
                            model={content}
                            onModelChange={handleEditorChange}
                            config={config}
                        />
                    </React.Suspense>
                )}
            </div>
            <style jsx>{`
                .editor-container :global(.fr-box) {
                    margin-bottom: 50px;
                    border-radius: 4px;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                }
                .editor-container :global(.fr-wrapper) {
                    min-height: 300px;
                    border: 1px solid #ddd;
                    border-top: none;
                }
                .editor-container :global(.fr-toolbar) {
                    border-radius: 4px 4px 0 0;
                    border: 1px solid #ddd;
                    box-shadow: none;
                }
                .editor-container :global(.fr-element img) {
                    max-width: 100%;
                    height: auto;
                }
                .editor-container :global(.fr-view table) {
                    border-collapse: collapse;
                    width: 100%;
                }
                .editor-container :global(.fr-view table td) {
                    border: 1px solid #cccccc;
                    padding: 5px;
                }
                .editor-container :global(.fr-toolbar button) {
                    transition: background 0.2s ease;
                }
                .editor-container :global(.fr-toolbar button:hover) {
                    background: #f0f0f0;
                }
                .editor-container :global(.fr-popup) {
                    border-radius: 4px;
                    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
                }
            `}</style>
        </div>
    );
}