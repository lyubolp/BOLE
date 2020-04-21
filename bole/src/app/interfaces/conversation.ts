import { ChatMessage } from './chat-message';

/**
 * A conversation is a chat with one other person, but allows mutiple people
 * as they can be specified in the memberIds array
 */
export interface Conversation {
    id: number;
    memberIds: number[];
    messages: ChatMessage[];
}
