import { FunctionComponent} from "react";

interface FileUploadProps{
    onUpload: (file: File) => void;
}

export const FileUpload: FunctionComponent<FileUploadProps> = ({ onUpload }) => {
  const allowedFileTypes = `application/json, text/json`;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let file = e.target.files ? e.target.files[0] : null;
    
    if (file) {
      onUpload(file);
    }
  };

  return (
    <>
        <input
            id="upload-file"
            name="upload-file"
            type="file"
            multiple={false}
            value={""}
            accept={allowedFileTypes}
            onChange={handleFileChange}
        />
    </>
  );
}