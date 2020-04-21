/**
 * A homework card is limited homeowork info used to display when browsing
 * homeworks.
 * Every rectangle with a homework on the following link
 * is a homework card
 * https://xd.adobe.com/view/d223df1e-6c52-48ce-6594-d5fb4215f572-a412/screen/6884f68f-9de6-4cf3-b9d9-e74d8cf8e01b/Homeworks
 * The task, submit solution and discussion links can use the homeworkId
 */
export interface HomeworkCard {
    id: number;
    courseId: number;
    courseName: string;
    deadline: Date;
    homeworkId: number;
}
