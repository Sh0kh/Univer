import React, { useState, useRef } from "react";
import { Editor } from '@tinymce/tinymce-react';

// Утилита для работы с API
import { $api } from "../utils";

// Компонент модального окна загрузки
const LoadingModal = ({ isOpen }) => {
    if (!isOpen) return null;
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999
        }}>
            <div style={{
                backgroundColor: 'white',
                padding: '20px 40px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                textAlign: 'center'
            }}>
                <div style={{ marginBottom: '15px' }}>
                    <div style={{
                        border: '4px solid #f3f3f3',
                        borderTop: '4px solid #3498db',
                        borderRadius: '50%',
                        width: '30px',
                        height: '30px',
                        animation: 'spin 2s linear infinite',
                        margin: '0 auto'
                    }}></div>
                </div>
                <p style={{ fontSize: '16px', margin: 0 }}>Загрузка...</p>
            </div>
            <style jsx>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default function RichBox({ value, onChange }) {
    const [isLoading, setIsLoading] = useState(false);
    const editorRef = useRef(null);

    // Функция для загрузки изображений
    const handleImageUpload = (blobInfo, progress) => {
        return new Promise((resolve, reject) => {
            const file = blobInfo.blob();

            setIsLoading(true);
            const formData = new FormData();
            formData.append('photo', file);

            $api.post('upload-photo', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                onUploadProgress: (progressEvent) => {
                    progress(progressEvent.loaded / progressEvent.total * 100);
                }
            })
                .then(response => {
                    setIsLoading(false);
                    if (response.data?.data?.photo?.[0]?.url) {
                        resolve(response.data.data.photo[0].url);
                    } else {
                        reject('Некорректный ответ от сервера');
                    }
                })
                .catch(error => {
                    setIsLoading(false);
                    console.error('Ошибка загрузки изображения:', error);
                    reject('Ошибка загрузки изображения');
                });
        });
    };

    return (
        <div
            style={{
                overflowX: 'auto',
                whiteSpace: 'nowrap',
                maxWidth: '100%',
                border: '1px solid #ddd',
                borderRadius: '8px'
            }}
        >
            {/* Модальное окно загрузки */}
            <LoadingModal isOpen={isLoading} />

            {/* TinyMCE Editor */}
            <Editor
                apiKey="swbxllpubas9mkbcofu5g23turhtv6yx2bq0ajg10w5d1gol" // Замените на ваш API ключ
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue={value || ''}
                onEditorChange={(newValue) => onChange(newValue)}
                init={{
                    directionality: 'ltr',
                    height: 400,
                    menubar: false,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount',
                        'emoticons', 'save', 'autosave', 'codesample', 'directionality',
                        'hr', 'nonbreaking', 'pagebreak', 'quickbars', 'paste', 'code'
                    ],
                    toolbar: 'undo redo | bold italic underline strikethrough | ' +
                        'fontfamily fontsize | forecolor backcolor | ' +
                        'alignleft aligncenter alignright alignjustify | ' +
                        'bullist numlist outdent indent | ' +
                        'link image media table emoticons | ' +
                        'code fullscreen',
                    placeholder: 'Начните писать...',
                    content_style: `
                    body {
                        font-family: Arial, sans-serif;
                        font-size: 14px;
                        direction: ltr; /* Устанавливаем направление текста слева направо */
                        unicode-bidi: normal; /* Отключаем возможные изменения направления */
                    }
                `,
                    branding: false,
                    promotion: false,
                    images_upload_handler: handleImageUpload,
                    images_reuse_filename: true,
                    paste_data_images: true,
                    automatic_uploads: true,
                    image_dimensions: true,
                    image_advtab: true,
                    file_picker_types: 'image',
                    table_responsive_width: true,
                    autosave_interval: '5s',
                    autosave_prefix: 'tinymce-autosave-{path}{query}-{id}-',
                    fontsize_formats: '8pt 10pt 12pt 14pt 16pt 18pt 20pt 24pt 30pt 36pt',
                    font_family_formats: 'Arial=arial,helvetica,sans-serif;' +
                        'Georgia=georgia,serif;' +
                        'Impact=impact,charcoal,sans-serif;' +
                        'Tahoma=tahoma,geneva,sans-serif;' +
                        'Times New Roman=times new roman,times,serif;' +
                        'Verdana=verdana,geneva,sans-serif',
                    formats: {
                        alignleft: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table', classes: 'text-left' },
                        aligncenter: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table', classes: 'text-center' },
                        alignright: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table', classes: 'text-right' },
                        alignjustify: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table', classes: 'text-justify' }
                    }
                }}
            />
        </div>
    );
}