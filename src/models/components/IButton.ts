import { ButtonHTMLAttributes, ChangeEvent } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
    isLoading?: boolean,
    icon: any
}