import React from "react";

export function FileUpload() {
  const allowedFileTypes = `application/json, text/json`;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let file = e.target.files ? e.target.files[0] : null;
    
    if (file) {
      const fileReader = new FileReader();
    }
  };

  return (
    <>
        <input
            id="upload-image"
            name="upload photo"
            type="file"
            multiple={false}
            value={""}
            accept={allowedFileTypes}
            onChange={handleFileChange}
        />
    </>
  );
}