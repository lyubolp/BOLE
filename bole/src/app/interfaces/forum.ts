import { ForumThread } from './forum-thread';

/**
 * A forum is a collection of forum threads (discussions)
 * https://xd.adobe.com/view/d223df1e-6c52-48ce-6594-d5fb4215f572-a412/screen/26adf2f1-531b-4287-987d-4982ab0ee6a5/Forums
 */
export interface Forum {
    id: number;
    name: string;
    category: ForumCategory;
    threads: ForumThread[];
}

enum ForumCategory {
    General,
    Course,
}
