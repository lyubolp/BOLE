import { GradesSection } from './grades-section';

/**
 * A 
 * A TaskGrade is every single line with a grade on the following link
 * https://xd.adobe.com/view/d223df1e-6c52-48ce-6594-d5fb4215f572-a412/screen/121c00d0-d5e5-494e-91b1-3e884428d1e9/Grades
 */
export interface GradesCard {
    studentId: number;
    courseId: number;
    courseName: string;
    sections: GradesSection[];
}
