/**
 * A forum message is a message in a forum thread (discussion)
 * https://xd.adobe.com/view/d223df1e-6c52-48ce-6594-d5fb4215f572-a412/screen/adf870c4-c084-4012-a0aa-4bfe6ca9c374/Forums-1
 */
export interface ForumMessage {
    id: number;
    threadId: number;
    authorId: number;
    authorUsername: string;
    message: string;
    date: Date;
}
