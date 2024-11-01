import React from "react";

interface DragDropAreaProps {
    onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
    onDragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
    onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
    isActive: boolean;
    error: string | null;
    file: File | null;
    previewSrc: string
    setFile: (file: File | null) => void;
    setPreviewSrc: (src: string) => void;
}

export const DragDropArea: React.FC<DragDropAreaProps> = ({
    onDragOver,
    onDragLeave,
    onDrop,
    isActive,
    error,
    file,
    previewSrc,
    setFile,
    setPreviewSrc,
}) => {
    return (
        <div
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            style={{
                border: isActive ? '2px dashed #007bff' : '2px dashed #ccc',
                padding: '20px',
                textAlign: 'center',
                transition: 'border-color 0.3s',
                cursor: 'pointer',
            }}
        >
            {file ? (
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <img src={previewSrc || ''} alt="Preview" />
                    <button
                        onClick={() => {
                            setFile(null);
                            setPreviewSrc('');
                        }}
                        title="移除"
                    >
                        &times;
                    </button>
                </div>
            ) : (
                <>
                    <span>⬆️</span>
                    <span>拖放媒体文件</span>
                    <span style={{ color: '#007bff', cursor: 'pointer' }}>浏览文件</span>
                    <p>最大大小: 4MB</p>
                    <p>支持格式: JPG, PNG</p>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </>
            )}
            <input
                id="file-upload"
                type="file"
                style={{ display: 'none' }}
                onChange={(e) => {
                    const selectedFile = e.target.files?.[0];
                    setFile(selectedFile || null);
                    setPreviewSrc(selectedFile ? URL.createObjectURL(selectedFile) : '');
                }}
            />
        </div>
    );
}
