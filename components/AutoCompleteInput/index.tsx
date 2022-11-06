import { useState, useCallback, ReactNode } from "react";
import { debounce } from "lodash";

// components
import { InputText } from "../Input";

export interface AutoCompleteInputProps<T> {
    getAutocompleteSuggestions: (value: string) => Promise<T[] | null>;
    renderItem: (item: T) => ReactNode;
    onSelect: (item: T) => void;
}

const AutoCompleteInput = <T, >(props: AutoCompleteInputProps<T>) => {
    const { getAutocompleteSuggestions, renderItem, onSelect } = props;
    
    const [ searchTerm, setSearchTerm ] = useState<string>("");
    const [ activeSearchTerm, setActiveSearchTerm ] = useState<string>("");
    const [ suggestions, setSuggestions ] = useState<T[] | null>([]);

    const loadSuggestions = async (text: string) => {
        try {
            setActiveSearchTerm(text);
            const results = await getAutocompleteSuggestions(text);
            setSuggestions(results);
        } catch (e) {
            setSuggestions([]);
        }
    }

    const debouncedChangeHandler = useCallback(debounce(loadSuggestions, 400), []);

    const onSearchTermChange = (value: string) => {
        setSearchTerm(value);
        debouncedChangeHandler(value);
    }

    return (
        <div className="flex flex-col flex-1 rounded-md border-slate-200 border bg-slate-50">
            <InputText 
                value={searchTerm}
                onChange={(value) => onSearchTermChange(value)}
                placeholder="Search for address"
            />
            <div className="divide-y divide-slate-200">
                {suggestions ? suggestions.map((item, index) => (
                    <div 
                        className="py-2 px-4 hover:bg-white cursor-pointer"
                        onMouseDown={() => {
                            setSearchTerm("");
                            setActiveSearchTerm("");
                            setSuggestions([]);

                            onSelect(item);
                        }}
                        key={index}
                    >
                        {renderItem(item)}
                    </div>
                )) : activeSearchTerm ? <div className="py-2 px-4">No results found</div> : null}
            </div>
        </div>
    )
}

export default AutoCompleteInput;