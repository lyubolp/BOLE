import {CourseCard} from '../courses/course-card';

export interface Homework {
    id: number;
    course: CourseCard;
    due_date: Date;
    statement_id: number;
    discussion_id: number;
}
