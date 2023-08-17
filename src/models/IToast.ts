export interface IToast {
    message: string,
    duration?: number,
    newToastWindow?: boolean,
    closeOption?: boolean,
    gravity?: "top" | "bottom",
    position?: "left" | "right" | "center"
}