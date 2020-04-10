import { CourseCard } from './course-card';

export class CourseGroup {
    constructor(public name: string = '', public cards: CourseCard[] = []) {}
}
