import { FunctionComponent, ReactNode } from "react";

export type FormItemStatus = "success" | "warning" | "error";

interface FormItemProps{
    label: string;
    required?: true;
    description?: string;
    status?: FormItemStatus | null;
    help?: string; 
    children?: ReactNode | ReactNode[];
}

export const FormItem: FunctionComponent<FormItemProps> = (props) => {
    const { children, label, description, required, status, help } = props;

    let allStylesFieldContainer = ["mb-6 pb-1"];
    let allStylesHelpLabel = ["font-semibold text-md"]

    if (status === "error") {
        allStylesFieldContainer = [
            ...allStylesFieldContainer,
            "border-l-danger-color border-l-4 pl-4",
        ];

        allStylesHelpLabel = [
            ...allStylesHelpLabel,
            "text-danger-color",
        ]
    }

    if (status === "warning") {
        allStylesFieldContainer = [
            ...allStylesFieldContainer,
            "border-l-warning-color border-l-4 pl-4",
        ];

        allStylesHelpLabel = [
            ...allStylesHelpLabel,
            "text-warning-color",
        ]
    }

    return(
        <div className={allStylesFieldContainer.join(" ")}>
            <div className="flex gap-1 flex-col mb-2">
                <label className="font-semibold text-lg text-gray-900">
                    {label}{required ? <span className="text-danger-color ml-1">*</span> : null}
                </label>
                {description ? <p className="text-lg text-gray-600">{description}</p> : null}
                {help ? <p className={allStylesHelpLabel.join(" ")}>{help}</p> : null}
            </div>
            <div className="flex flex-1">
                {children}
            </div>
        </div>
    )
}