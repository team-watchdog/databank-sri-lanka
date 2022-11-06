import { FunctionComponent, ReactNode } from "react";

interface PageHeaderProps{
    title: string;
    description?: string;
    actions: ReactNode;
}

export const PageHeader: FunctionComponent<PageHeaderProps> = (props) => {
    const { title, description, actions } = props;

    return (
        <div className="border-b border-b-slate-200 py-2">
            <div className="flex flex-col gap-y-2">
                <h3 className="font-bold text-2xl">{title}</h3>
                {description ? <p className="text-md text-slate-500">{description}</p> : null}
            </div>
        </div>
    )
}