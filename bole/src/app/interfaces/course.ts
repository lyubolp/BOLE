import { CourseResource } from './course-resource';

export interface Course {
    id: number;
    name: string;
    resources: CourseResource[];
}
