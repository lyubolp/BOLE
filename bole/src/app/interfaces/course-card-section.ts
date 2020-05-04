import { CourseCard } from './course-card';

export class CourseCardSection {
    constructor(public name: string = '', public cards: CourseCard[] = []) {}
}
