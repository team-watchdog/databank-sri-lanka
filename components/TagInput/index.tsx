import { FunctionComponent, useEffect, useRef, useState } from "react";
import { XIcon } from "@heroicons/react/outline";

// types
export type InputStatus = "success" | "warning" | "error";

interface TagInputProps{
    values: string[];
    placeholder?: string;
    status?: InputStatus;
    onChange?: (value: string[]) => void;
}

export const TagInput: FunctionComponent<TagInputProps> = (props) => {
    const { values, placeholder, status, onChange } = props;
    const [ tagInput, setTagInput ] = useState<string>("");

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

    const onSubmit = () => {
        const tmp = [
            ...(values ? values : [] as string[]),
            tagInput,
        ];

        if (onChange) onChange(tmp);
        setTagInput("");
    }

    return (
        <div className="flex flex-1 flex-col gap-2">
            <div className="flex gap-1 flex-wrap">
                {values ? values.map((tag, i) => (
                    <span className="p-2 text-white rounded-md flex items-center gap-2 bg-slate-800" key={i}>
                        <span>{tag}</span>
                        <a href="" onClick={(e) => {
                            const tmp = [
                                ...values.slice(0, i),
                                ...values.slice(i + 1, values.length),
                            ];
                            
                            if (onChange) onChange(tmp);

                            e.stopPropagation();
                            e.preventDefault();
                        }}><XIcon className="w-4 h-4 text-white"/></a>
                    </span>
                )) : null}
            </div>
            <input 
                type="text"
                placeholder={placeholder ? placeholder: undefined}
                value={tagInput || ""}
                className={inputStyles.join(" ")}
                onChange={(e) => {
                    setTagInput(e.target.value);
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        onSubmit();
                        e.preventDefault();
                    }
                }}
            />
        </div>
    )
}