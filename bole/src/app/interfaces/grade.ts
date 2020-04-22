/**
 * A task grade is a grade received for doing a completing a task -
 * homework or test.
 * A TaskGrade is every single line with a grade on the following link
 * https://xd.adobe.com/view/d223df1e-6c52-48ce-6594-d5fb4215f572-a412/screen/121c00d0-d5e5-494e-91b1-3e884428d1e9/Grades
 */
export interface Grade {
    studentId: number;
    courseId: number;
    taskId: number;
    taskName: string;
    gradeMax: number;
    gradeMin: number;
    grade: number;
    weight: number;
}
