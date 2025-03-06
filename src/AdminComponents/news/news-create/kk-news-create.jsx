import { Input, Textarea } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";

// Используем lazy loading для Froala
const FroalaEditor = React.lazy(() => {
    // Импортируем все необходимые модули Froala
    return Promise.all([
        import('froala-editor/js/froala_editor.pkgd.min.js'),
        import('froala-editor/js/plugins/image.min.js'),
        import('froala-editor/js/plugins/link.min.js'),
        import('froala-editor/js/plugins/lists.min.js'),
        import('froala-editor/js/plugins/paragraph_format.min.js'),
        import('froala-editor/js/plugins/table.min.js'),
        import('froala-editor/js/plugins/colors.min.js'),
        import('froala-editor/js/plugins/font_size.min.js'),
        import('froala-editor/js/plugins/font_family.min.js'),
        import('froala-editor/js/plugins/file.min.js'),
        import('froala-editor/js/plugins/code_view.min.js'),
        import('froala-editor/js/plugins/char_counter.min.js'),
        import('froala-editor/js/plugins/emoticons.min.js'),
        import('froala-editor/js/plugins/align.min.js'),
        import('froala-editor/js/plugins/quote.min.js'),
        import('froala-editor/js/plugins/line_height.min.js'),
        import('froala-editor/css/froala_editor.pkgd.min.css'),
        import('froala-editor/css/froala_style.min.css'),
        import('froala-editor/css/plugins/table.min.css'),
        import('froala-editor/css/plugins/colors.min.css'),
        import('froala-editor/css/plugins/emoticons.min.css'),
        import('froala-editor/css/plugins/char_counter.min.css'),
        import('froala-editor/css/plugins/code_view.min.css'),
        import('froala-editor/css/plugins/file.min.css')
    ]).then(() => import('react-froala-wysiwyg'));
});

export default function KKNewsCreate({ value, onChange }) {
    const [content, setContent] = useState("");
    const [isClientSide, setIsClientSide] = useState(false);

    // Устанавливаем значение при изменении props
    useEffect(() => {
        setContent(value?.summary || "");
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
        onChange((prev) => ({ ...prev, summary: model }));
    };

    // Конфигурация для Froala Editor с расширенными настройками таблиц
    const config = {
        placeholderText: '...',
        heightMin: 300,
        attribution: false,
        charCounterCount: true,
        charCounterMax: 10000,

        // Расширенная панель инструментов с поддержкой таблиц и форматирования
        toolbarButtons: {
            'moreText': {
                'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'clearFormatting']
            },
            'moreParagraph': {
                'buttons': ['alignLeft', 'alignCenter', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'lineHeight', 'outdent', 'indent', 'quote']
            },
            'moreRich': {
                'buttons': ['insertLink', 'insertImage', 'insertTable', 'emoticons', 'specialCharacters', 'insertHR']
            },
            'moreMisc': {
                'buttons': ['undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 'selectAll', 'html', 'help'],
                'align': 'right',
                'buttonsVisible': 2
            }
        },

        // Настройка таблиц
        tableInsertMaxSize: 10,
        tableEditButtons: [
            'tableHeader',
            'tableRemove',
            'tableRows',
            'tableColumns',
            'tableStyle',
            'tableCells',
            'tableCellBackground',
            'tableCellVerticalAlign',
            'tableCellHorizontalAlign',
            'tableCellStyle'
        ],
        tableStyles: {
            'fr-dashed-borders': 'Dashed Borders',
            'fr-alternate-rows': 'Alternate Rows',
            'fr-no-borders': 'No Borders',
            'fr-bordered': 'Bordered',
            'fr-striped': 'Striped',
            'fr-compact': 'Compact',
            'fr-hover': 'Hover Effect',
            'fr-table-lightgray': 'Light Gray',
            'custom-table-style': 'Custom Style'
        },
        tableCellStyles: {
            'fr-highlighted': 'Highlighted',
            'fr-thick': 'Thick Border',
            'fr-success': 'Success',
            'fr-warning': 'Warning',
            'fr-danger': 'Danger',
            'fr-info': 'Info'
        },

        // Настройка загрузки изображений
        imageUploadToS3: false,
        imageUpload: true,
        imageAllowedTypes: ['jpeg', 'jpg', 'png', 'gif', 'webp'],
        imageDefaultWidth: 0,
        imageDefaultDisplay: 'block',
        imageDefaultAlign: 'center',
        imageStyles: {
            'fr-rounded': 'Rounded',
            'fr-bordered': 'Bordered',
            'fr-shadow': 'Shadow',
            'img-responsive': 'Responsive'
        },

        // Дополнительные настройки для лучшего пользовательского опыта
        toolbarSticky: true,
        toolbarStickyOffset: 0,
        tabSpaces: 4,
        pastePlain: false,
        quickInsertEnabled: true,
        pasteAllowLocalImages: true,

        // События
        events: {
            'image.beforeUpload': function (images) {
                if (images.length) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        this.image.insert(e.target.result, null, null, this.image.get());
                    };
                    reader.readAsDataURL(images[0]);
                    return false;
                }
            },
            'initialized': function () {
                console.log('Froala Editor initialized');
            },
            'focus': function () {
                console.log('Editor focused');
            },
            'table.inserted': function (table) {
                console.log('Table inserted', table);
            },
            'charCounter.exceeded': function () {
                console.warn('Character limit exceeded');
            }
        },

        // Пользовательские CSS классы
        htmlAllowedTags: ['.*'],
        htmlAllowedAttrs: ['.*'],
        htmlDoNotWrapTags: ['script', 'style', 'img', 'br'],
        htmlExecuteScripts: false
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
                        font-size: 16px;
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
                    .editor-container :global(.fr-view ol) {
                        list-style-type: decimal;
                        padding-left: 20px;
                    }
                    .editor-container :global(.fr-view ul) {
                        list-style-type: disc;
                        padding-left: 20px;
                    }
                    .editor-container :global(.fr-view table) {
                        border-collapse: collapse;
                        width: 100%;
                        margin-bottom: 1rem;
                    }
                    .editor-container :global(.fr-view table td, .fr-view table th) {
                        border: 1px solid #ddd;
                        padding: 8px;
                    }
                    .editor-container :global(.fr-view table th) {
                        padding-top: 12px;
                        padding-bottom: 12px;
                        text-align: left;
                        background-color: #f8f9fa;
                    }
                    .editor-container :global(.fr-view .fr-dashed-borders td, .fr-view .fr-dashed-borders th) {
                        border-style: dashed;
                    }
                    .editor-container :global(.fr-view .fr-alternate-rows tr:nth-child(even)) {
                        background-color: #f2f2f2;
                    }
                    .editor-container :global(.fr-view .fr-no-borders td, .fr-view .fr-no-borders th) {
                        border: none;
                    }
                    .editor-container :global(.fr-view .fr-bordered) {
                        border: 1px solid #ddd;
                    }
                    .editor-container :global(.fr-view .fr-striped tr:nth-child(even)) {
                        background-color: #f8f9fa;
                    }
                    .editor-container :global(.fr-view .fr-hover tr:hover) {
                        background-color: #e9ecef;
                    }
                    .editor-container :global(.fr-view .fr-table-lightgray) {
                        background-color: #f8f9fa;
                    }
                    .editor-container :global(.fr-view .custom-table-style) {
                        border: 2px solid #6c757d;
                        border-radius: 4px;
                        overflow: hidden;
                    }
                    .editor-container :global(.fr-view .fr-highlighted) {
                        background-color: #fff3cd;
                    }
                    .editor-container :global(.fr-view .fr-thick) {
                        border: 2px solid #000;
                    }
                    .editor-container :global(.fr-view .fr-success) {
                        background-color: #d4edda;
                    }
                    .editor-container :global(.fr-view .fr-warning) {
                        background-color: #fff3cd;
                    }
                    .editor-container :global(.fr-view .fr-danger) {
                        background-color: #f8d7da;
                    }
                    .editor-container :global(.fr-view .fr-info) {
                        background-color: #d1ecf1;
                    }
                    .editor-container :global(.fr-sticky-on) {
                        z-index: 10;
                    }
                    .editor-container :global(.fr-popup) {
                        border-radius: 4px;
                        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
                    }
                    .editor-container :global(.fr-image-resizer) {
                        border: 1px solid #1e88e5;
                    }
                    .editor-container :global(.fr-toolbar .fr-command.fr-btn) {
                        margin: 0 2px;
                    }
                    .editor-container :global(.fr-popup .fr-buttons) {
                        padding: 5px 3px;
                    }
                    .editor-container :global(.fr-counter) {
                        margin-top: 10px;
                        color: #6c757d;
                        font-size: 12px;
                    }
                `}</style>
            </div>
        </div>
    );
}