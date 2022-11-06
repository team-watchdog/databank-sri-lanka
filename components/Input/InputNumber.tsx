import { FunctionComponent } from "react";

// types
import { InputStatus } from "./types";

interface InputNumberProps{
    value?: number;
    placeholder?: string;
    status?: InputStatus;
    onChange?: (value: number) => void;
}

export const InputNumber: FunctionComponent<InputNumberProps> = (props) => {
    const { value, placeholder, status, onChange } = props;

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
            type="number" 
            placeholder={placeholder ? placeholder: undefined}
            value={value ? value : ""}
            className={inputStyles.join(" ")}
            onChange={(e) => {
                if (onChange) {
                    const tmpStr = e.target.value.replace(/\D/g,'');
                    onChange(parseInt(tmpStr));
                }
            }}
        />
    )
}