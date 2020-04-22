/**
 * https://xd.adobe.com/view/d223df1e-6c52-48ce-6594-d5fb4215f572-a412/screen/df70a561-9c6e-4c22-b623-86638e4b2240/Homework
 * Extends HomeworkCard info adding the id of the discussion, how many times we can attempt the homework and the grade
 */


import {HomeworkCard} from './homework-card';
import {Grade} from './grade';

export interface Homework extends HomeworkCard {
    discussionId: number;
    attemptsLeft: number;
    grade: Grade;
    name: string;
}
