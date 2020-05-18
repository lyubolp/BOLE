
/*
    The Kanban card consists of the following data:
    - name
    - description
    - priority (Low, Medium, High)
    - assignees
    - due date
 */

export enum Priority {
    Low ,
    Medium,
    High
}
export interface Card {
    name: string;
    description: string;
    priority: Priority;
    assignees: number[];
    dueDate: Date;
}
