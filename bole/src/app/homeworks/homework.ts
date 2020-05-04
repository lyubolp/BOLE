/**
 * @deprecated
 * This class should now be obsolete
 * It is replaced by /interfaces/homewor-card
 */
import {CourseCard} from '../interfaces/course-card';


interface Homework {
    id: number;
    course: CourseCard;
    due_date: Date;
    statement_id: number;
    discussion_id: number;
}
