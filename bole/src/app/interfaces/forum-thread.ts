import { ForumMessage } from './forum-message';
/**
 * A forum thread is each discussion board part of a forum
 * https://xd.adobe.com/view/d223df1e-6c52-48ce-6594-d5fb4215f572-a412/screen/26adf2f1-531b-4287-987d-4982ab0ee6a5/Forums/
 */
export interface ForumThread {
    id: number;
    name: string;
    memberIds: number[];
    messages: ForumMessage[];
}
