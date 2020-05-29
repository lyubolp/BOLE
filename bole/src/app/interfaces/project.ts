/**
 * The project contains some links:
 *  - Slack
 *  - Github repo
 *  - Cloud storage
 *  - Kanban board
 *  - Team members
 *  - Chat for the team only
 */
import {ProjectCard} from './project-card';

export interface Project extends ProjectCard {
    github: string;
    cloudStorageId: number;
    kanbanBoardId: number;
    team_ids: number[];
    conversation_id: number;
}
