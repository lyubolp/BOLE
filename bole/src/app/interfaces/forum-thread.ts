import { ForumMessage } from './forum-message';

/**
 * A forum thread is each discussion board part of a forum
 * https://xd.adobe.com/view/d223df1e-6c52-48ce-6594-d5fb4215f572-a412/screen/adf870c4-c084-4012-a0aa-4bfe6ca9c374/Forums-1
 */
export interface ForumThread {
    id: number;
    memberIds: number[];
    messages: ForumMessage[];
}
