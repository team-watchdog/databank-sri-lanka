export type InputStatus = "success" | "warning" | "error";

export interface SelectValue{
    value: string;
    label: string;
    data?: unknown;
}