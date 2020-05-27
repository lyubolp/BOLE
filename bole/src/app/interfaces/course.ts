import { CourseSection } from './course-section';
import { CourseAnnouncement } from './course-announcement';

/**
 * A course is a collection of course sections with links, pinned links
 * calendar events and announcements
 * A course is everything on the following page put together
 * https://xd.adobe.com/view/d223df1e-6c52-48ce-6594-d5fb4215f572-a412/screen/c8afde2a-2128-4985-b8ea-65f40396f38f/Course-page
 */
export interface Course {
    id: number;
    name: string;
    subName: string;
    sections: CourseSection[];
    pinned: CourseSection;
    announcements: CourseAnnouncement[];
}
