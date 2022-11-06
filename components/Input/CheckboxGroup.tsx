import { FunctionComponent } from "react";

import { SelectValue } from "./types";
import { CheckboxItem } from "./CheckboxItem";

interface CheckboxGroupProps{
    options: SelectValue[];
    values: string[];
    onChange: (values: string[]) => void;
}

export const CheckboxGroup: FunctionComponent<CheckboxGroupProps> = (props) => {
    const { values, options, onChange } = props;

    return (
        <div className="flex gap-4 flex-col">
            {options.map((option, i) => (
                <CheckboxItem 
                    name={`checkbox-item-${option.value}`}
                    option={option}
                    value={values ? values.includes(option.value) : false}
                    onChange={(checked) => {
                        if (checked) onChange([...(values ? values : []), option.value]);
                        else onChange((values ? values : []).filter((value) => value !== option.value));
                    }}
                    key={i}
                />
            ))}
        </div>
    )
}