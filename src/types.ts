interface SubTask  {
    id: string;
    title: string;
    description?: string;
}

export interface Project {
    id: string;
    projectName: string;
    projectColor: string;
    subTasks?: SubTask[]
}