import { Grade } from './grade';

/**
 * A grade section is a collection of grades to display on a grade card
 * Homeworks, Tests and Projects are sections on the following link
 * https://xd.adobe.com/view/d223df1e-6c52-48ce-6594-d5fb4215f572-a412/screen/121c00d0-d5e5-494e-91b1-3e884428d1e9/Grades
 */
export interface GradesSection {
    name: string;
    grades: Grade[];
}
