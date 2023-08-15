import { InputHTMLAttributes } from "react";

export interface IInputGroup extends InputHTMLAttributes<HTMLInputElement> {
    inputLabel: string,
    isDisabled?: boolean,
    other?: any
}