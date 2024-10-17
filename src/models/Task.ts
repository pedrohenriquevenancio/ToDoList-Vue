import type TaskGroup from "./TaskGroup";

export default interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    taskGroup: TaskGroup;
}