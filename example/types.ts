import { CoList, CoMap } from 'cojson'

/** An individual task which collaborators can tick or rename */
export type Task = CoMap<{ done: boolean; text: string; }>;

/** A collaborative, ordered list of task references */
export type ListOfTasks = CoList<Task['id']>;

/** Our top level object: a project with a title, referencing a list of tasks */
export type TodoProject = CoMap<{
    title: string;
    /** A collaborative, ordered list of tasks */
    tasks: ListOfTasks['id'];
}>;

export type ListOfProjects = CoList<TodoProject['id']>;

export type TodoAccountRoot = CoMap<{
    projects: ListOfProjects['id'];
}>;
