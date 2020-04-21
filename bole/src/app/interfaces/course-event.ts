/**
 * A course event is an event to be shown in the calendar
 * On the following page the calendar has multiple events
 * https://xd.adobe.com/view/d223df1e-6c52-48ce-6594-d5fb4215f572-a412/screen/c8afde2a-2128-4985-b8ea-65f40396f38f/Course-page
 */
export interface CourseEvent {
    id: number;
    date: Date;
    name: string;
    description: string;
}
