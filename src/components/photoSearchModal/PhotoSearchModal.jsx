import React, { useState } from "react";
function PhotoSearchModal() {
    const [isDragging, setIsDragging] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    // ড্র্যাগ ইভেন্ট হ্যান্ডলার
    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            setSelectedFile(e.dataTransfer.files[0]);
            e.dataTransfer.clearData();
        }
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const removeFile = () => {
        setSelectedFile(null);
    };
    return (
        <div>
            <dialog id="photo_search_modal" className="modal">
                <div className="modal-box">
                    <div>
                        <div>
                            <h1 className="text-xl font-bold">
                                Search by Image
                            </h1>
                            <p className="text-gray-600 mt-1 text-sm">
                                Find what you love with better prices on
                                AliExpress by using an image search
                            </p>
                        </div>

                        <div className="mt-4 card bg-base-100 border border-base-300">
                            <div className="card-body">
                                <div
                                    className={`
                            relative w-full h-44 rounded-xl border-2 border-dashed transition-all duration-300 ease-in-out flex flex-col justify-center items-center cursor-pointer
                            ${
                                isDragging
                                    ? "border-primary bg-primary/10 scale-[1.02]"
                                    : "border-base-content/20 hover:border-primary/50 hover:bg-base-200/50"
                            }
                        `}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                >
                                    {/* আসল ইনপুটটি হাইড করা আছে কিন্তু পুরো এরিয়া জুড়ে কাজ করবে */}
                                    <input
                                        type="file"
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                        onChange={handleFileChange}
                                        accept="image/*,.pdf" // আপনার প্রয়োজন মতো এক্সটেনশন দিন
                                    />

                                    {selectedFile ? (
                                        // ফাইল সিলেক্ট হওয়ার পর এই অংশ দেখাবে
                                        <div className="flex flex-col items-center justify-center z-20 text-center p-4 animate-fade-in">
                                            <div className="avatar placeholder mb-3">
                                                <div className="bg-neutral-focus text-neutral-content rounded-full w-16 ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <span className="text-3xl">
                                                        📎
                                                    </span>
                                                </div>
                                            </div>
                                            <p className="font-semibold text-lg text-base-content">
                                                {selectedFile.name}
                                            </p>
                                            <p className="text-sm text-base-content/60">
                                                {(
                                                    selectedFile.size / 1024
                                                ).toFixed(2)}{" "}
                                                KB
                                            </p>
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault(); // ইনপুট ট্রিগার বন্ধ করতে
                                                    removeFile();
                                                }}
                                                className="btn btn-sm btn-error btn-outline mt-4 relative z-30"
                                            >
                                                Remove File
                                            </button>
                                        </div>
                                    ) : (
                                        // ফাইল আপলোড করার আগের অবস্থা
                                        <div className="flex flex-col items-center justify-center text-center space-y-3 p-4">
                                            <div
                                                className={`p-4 rounded-full transition-colors ${
                                                    isDragging
                                                        ? "bg-primary text-primary-content"
                                                        : "bg-base-200 text-base-content/50"
                                                }`}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-10 h-10"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-lg font-medium text-base-content">
                                                    <span className="text-primary">
                                                        Click to upload
                                                    </span>{" "}
                                                    or drag and drop
                                                </p>
                                                <p className="text-sm text-base-content/60">
                                                    SVG, PNG, JPG or GIF (max.
                                                    800x400px)
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* আপলোড বাটন */}
                                <div className="mt-4 flex justify-center gap-4 items-center">
                                    <div className="modal-action m-0">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-secondary">
                                                Cancel
                                            </button>
                                        </form>
                                    </div>
                                    <div>
                                        <button
                                            className="btn btn-primary"
                                            disabled={!selectedFile}
                                        >
                                            Upload File
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
}

export default PhotoSearchModal;
