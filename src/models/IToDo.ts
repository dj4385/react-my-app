export interface IToDo {
    task: string,
    isCompleted: boolean,
    userId: string,
    id?: string | undefined
}

export interface IToDoForm {
    task: string
}