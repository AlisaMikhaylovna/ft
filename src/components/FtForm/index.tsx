import { useState } from "react";
import { DragDropArea } from "@/components/DragDropArea";

export const FtForm = () => {
    const [FTName, setFTName] = useState<string>("");
    const [FTSymbol, setFTSymbol] = useState<string>("");
    const [FTAmount, setFTAmount] = useState<number>(0);
    const [FTDecimal, setFTDecimal] = useState<number>(0);
    const [dragActive, setDragActive] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [previewSrc, setPreviewSrc] = useState<string>('');

    const handleForm = (e: React.FormEvent) => {
        e.preventDefault();
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragActive(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragActive(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragActive(false);
        const selectedFile = e.dataTransfer.files?.[0];
        handleFile(selectedFile);
    };

    const handleFile = (selectedFile: File | null) => {
        const MAX_FILE_SIZE_MB = 4;
        const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

        if (selectedFile) {
            if (selectedFile.size > MAX_FILE_SIZE_BYTES) {
                setError(`文件大小超过 ${MAX_FILE_SIZE_MB}MB 限制。`);
                return;
            }

            if (!selectedFile.type.startsWith('image/')) {
                setError('请选取一个有效的图片文件(JPG, PNG)');
                return;
            }

            setFile(selectedFile);
            setError(null);
            setPreviewSrc(URL.createObjectURL(selectedFile));
        }
    };

    return (
        <div>
            <form onSubmit={handleForm}>
                <span>FT Name</span>
                <input
                    type='text'
                    value={FTName}
                    onChange={(e) => setFTName(e.target.value)}
                    required
                />
                <span>FT Symbol</span>
                <input
                    type="text"
                    value={FTSymbol}
                    onChange={(e) => setFTSymbol(e.target.value)}
                    required
                />
                <span>FT Decimal</span>
                <input
                    value={FTDecimal}
                    onChange={(e) => setFTDecimal(Number(e.target.value))}
                    required
                />
                <span>FT Amount</span>
                <input
                    value={FTAmount}
                    onChange={(e) => setFTAmount(Number(e.target.value))}
                    required
                />

                <DragDropArea
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    isActive={dragActive}
                    error={error}
                    file={file}
                    previewSrc={previewSrc}
                    setFile={setFile}
                    setPreviewSrc={setPreviewSrc}
                />

                <button type="submit">提交</button>
            </form>
        </div>
    );
}
