import { CourseCard } from '../interfaces/course-card';

export class CourseGroup {
    constructor(public name: string = '', public cards: CourseCard[] = []) {}
}
