import { FunctionComponent } from "react";

// types
import { InputStatus } from "./types";

interface Option{
    label: string;
    value: unknown;
}

export interface SelectProps{
    status?: InputStatus;
    placeholder?: string;
    value?: unknown;
    onChange: (value: unknown) => void;
    options: Option[];
}

export const Select: FunctionComponent<SelectProps> = (props) => {
    const { status, placeholder, value, onChange, options } = props;

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
        <select
            onChange={(e) => {
                onChange(JSON.parse(e.target.value));
            }}
            value={value ? JSON.stringify(value) : undefined}
            placeholder={placeholder}
            className={inputStyles.join(" ")}
        >
            {options ? options.map((option, i) => (
                <option key={i} value={JSON.stringify(option.value)}>{option.label}</option>
            )) : []}
        </select>
    );
}