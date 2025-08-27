import { useRef } from "react";

export default function UploadButton({ text, onFileSelect }) {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      if (file.type === "application/json" || file.name.endsWith(".json")) {
        onFileSelect(file);
      } else {
        alert("Please select a JSON file");
      }
    } else {
      alert("Please upload a file");
    }
  };

  return (
    <>
      <button className="upload-button" onClick={handleClick}>
        {text}
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleUpload}
        accept=".json"
        style={{ display: "none" }}
      />
    </>
  );
}
