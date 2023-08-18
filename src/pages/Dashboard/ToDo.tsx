import { useEffect, useState } from "react";
import Button from "../../components/Button";
import InputGroup from "../../components/InputGroup";
import { IToDo, IToDoForm } from "../../models/IToDo";
import { useForm } from "react-hook-form";
import FirestoreService from "../../services/Firestore";
import { LocalStorageService } from "../../services/LocalStorage";
import { STORAGEENUM } from "../../models/enums";
import { NotifierService } from "../../services/Notifier";
import {AiOutlineCheckSquare, AiFillDelete} from "react-icons/ai";
import {ImCheckboxUnchecked} from "react-icons/im";

const ToDo = () => {

    const [tasks, setTasks] = useState<IToDo[]>([]);
    const {register, handleSubmit, reset} = useForm<IToDoForm>()

    const createTask = (data: IToDoForm) => {
        const userInfo: string | null = LocalStorageService.getItem(STORAGEENUM.user);
        const user = userInfo ? JSON.parse(userInfo) : null;
        if(data.task) {
            FirestoreService.create({
                task: data.task,
                isCompleted: false,
                userId: user.user_id
            })
            getAllToDo();
            reset()
        }
    }

    const deleteToDoItem = (id: string) => {
        FirestoreService.delete(id).then((res) => {
            getAllToDo();
            NotifierService.showSuccess({
                message: 'ToDo Task Deleted Succefully'
            })
        }).catch((err) => {
            getAllToDo();
            NotifierService.showError({
                message: 'Unable to update task'
            })
        });
    }

    const updateTask = (task: IToDo) => {

    }

    const toggleTaskStatus = (task: IToDo) => {
        FirestoreService.updateIndividual(task.id, {
            isCompleted: !task.isCompleted,
            task: task.task,
            userId: task.userId
        }).then((res) => {
            getAllToDo();
            NotifierService.showSuccess({
                message: 'Task Updated Succefully'
            })
        }).catch((err) => {
            getAllToDo();
            NotifierService.showError({
                message: 'Unable to update task'
            })
        })
    }

    const getAllToDo = () => {
        setTasks([]);
        let allTasks: IToDo[] = [];
        FirestoreService.getAll().onSnapshot((query: any) => {
            query.forEach((q: any) => {
                allTasks.push({
                    id: q.id,
                    ...q.data()
                })
            });
            setTasks([...allTasks]);
        });
    };

    useEffect(() => {
        getAllToDo();
    }, [])

    return (
        <div className="container">
            <div className="mb-5">
                <h1 className="font-semibold text-2xl">ToDo Application</h1>
            </div>
            <div className="mb-5">
                <form className="flex flex-row gap-5" onSubmit={handleSubmit(createTask)}>
                    <div className="w-[85%] flex items-center justify-center">
                        <InputGroup
                            inputLabel=""
                            placeholder="Enter ToDo Task"
                            other={{
                                ...register('task')
                            }}
                        />
                    </div>
                    <div className="w-[15%] flex items-center justify-center">
                        <Button
                            icon=""
                            label="Create Task"
                        />
                    </div>
                </form>
            </div>
            <div className="mb-5">
                <h2 className="font-semibold text-2xl">Task List</h2>
                <div className="flex flex-col h-[350px] max-h-[350px] overflow-x-auto border border-primary rounded-sm shadow-lg p-2">
                    {
                        tasks && tasks.length ? tasks.map((task: IToDo, index: number) => (
                            <div className="flex flex-row justify-between bg-primary text-white my-2 p-2 rounded-lg" key={index}>
                                <div className="flex flex-row items-center justify-center cursor-pointer" onClick={() => toggleTaskStatus(task)}>
                                    {
                                        task.isCompleted ? (<AiOutlineCheckSquare />) : (<ImCheckboxUnchecked />)
                                    }
                                    <p className={task.isCompleted ? 'ml-2 line-through' : 'ml-2'}>{task.task}</p>
                                </div>
                                <div>
                                    <AiFillDelete />
                                </div>
                                
                            </div>
                        )) : null
                    }
                </div>
            </div>
        </div>
    )
}

export default ToDo;

