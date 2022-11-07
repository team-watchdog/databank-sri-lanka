import { FunctionComponent } from "react";

interface PaginationProps{
    count: number;
    limit: number;
    page: number;
    onPageChange: (page: number) => void;
}

export const Pagination: FunctionComponent<PaginationProps> = (props) => {
    const { count, limit, page, onPageChange } = props;

    const numPages = Math.ceil(count / limit);
    const pages = [];

    for (let i = 0; i < numPages; i += 1) pages.push(i);

    return (
        <div className="flex flex-row gap-x-1">
            {pages.map((cur, i) => (
                <a 
                    className="cursor-pointer"
                    onMouseDown={(e) => {
                        onPageChange(i);
                        e.preventDefault();
                    }}
                    key={i}
                >
                    <span 
                        className={`
                            py-2 px-2 border ${cur === page ? "border-default-color" : "border-zinc-300"} 
                            rounded-md 
                            ${cur === page ? "text-white bg-default-color" : "text-zinc-700"}
                        `}
                    >{cur + 1}</span>
                </a>
            ))}
        </div>
    )
}