import { FunctionComponent } from "react";

// types
import { InputStatus } from "./types";

interface InputTextProps{
    type?: "text" | "password" | "email" | "textarea";
    value?: string;
    placeholder?: string;
    status?: InputStatus;
    onChange?: (value: string) => void;
}

export const InputText: FunctionComponent<InputTextProps> = (props) => {
    const { value, placeholder, status, type, onChange } = props;

    let inputStyles = ["flex-1 px-3 py-2 border rounded-md"];

    if (status === "error") {
        inputStyles = [...inputStyles, "border-danger-color outline-danger-color"];
    }
    if (status === "warning") {
        inputStyles = [...inputStyles, "border-warning-color outline-warning-color"];
    }

    if (status === "success") {
        inputStyles = [...inputStyles, "border-success-color outline-success-color"];
    }

    return (
        <input 
            type={type ? type : "text"} 
            placeholder={placeholder ? placeholder: undefined}
            value={value ? value : ""}
            className={inputStyles.join(" ")}
            onChange={(e) => {
                if (onChange) onChange(e.target.value);
            }}
        />
    )
}