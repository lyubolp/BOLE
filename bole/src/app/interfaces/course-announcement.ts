/**
 * A course announcement is a notification to be shown to the students
 * An announcement on the following page is "Homework 1 is uploaded" or
 * "There will be no lectures tomorrow (03.03)"
 * https://xd.adobe.com/view/d223df1e-6c52-48ce-6594-d5fb4215f572-a412/screen/c8afde2a-2128-4985-b8ea-65f40396f38f/Course-page
 */
export interface CourseAnnouncement {
    id: number;
    date: Date;
    announcement: string;
}
