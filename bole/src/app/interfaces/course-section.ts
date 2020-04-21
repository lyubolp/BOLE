import { CourseResourceLink } from './course-resource-link';

/**
 * A course section is a week or a module from the course, containing
 * course links
 * In the following link every week is a section
 * https://xd.adobe.com/view/d223df1e-6c52-48ce-6594-d5fb4215f572-a412/screen/c8afde2a-2128-4985-b8ea-65f40396f38f/Course-page
 */
export interface CourseSection {
    id: number;
    name: string;
    resourceLinks: CourseResourceLink[];
}
