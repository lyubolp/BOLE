/**
 * A Task is an assignment that the user has to do, it's displayed on the dashboard
 */
export interface Task {
    title: string;
    userId: number;
    courseId: number;
}
