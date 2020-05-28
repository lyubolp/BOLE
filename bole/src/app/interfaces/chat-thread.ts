import { ChatMessage } from './chat-message';

export class ChatThread {
    constructor(public name: string = '', public messages: ChatMessage[] = []) {}
}
