import { FunctionComponent, ReactNode } from "react";

interface SummaryLineProps{
    label: string;
    children: ReactNode | string;
    actions?: ReactNode | string;
}

export const SummaryLine: FunctionComponent<SummaryLineProps> = (props) => {
    const { label, children, actions } = props;

    return (
        <div className="grid grid-cols-6 pr-4 border-b pb-2 mb-2 gap-4 align-middle">
            <div className="col-span-1"><b className="font-bold text-md">{label}</b></div>
            <div className="col-span-5">
                {children}
            </div>
            {actions ? <div className="col-span-1">{actions}</div> : null}
        </div>
    )
}