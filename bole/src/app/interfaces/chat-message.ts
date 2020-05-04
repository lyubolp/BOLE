/**
 * A chat message is a message in a chat (discussion)
 */
export interface ChatMessage {
    id: number;
    conversationId: number;
    authorId: number;
    message: string;
    date: Date;
}
