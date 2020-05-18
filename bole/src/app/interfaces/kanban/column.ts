import {Card} from './card';
/*
    The Kanban column contains a name and cards
 */

export interface Column {
    name: string;
    cards: Card[];
}
