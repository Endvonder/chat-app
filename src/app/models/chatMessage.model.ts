import { fail } from "assert";

export class ChatMessage {
    public sent: Date;
    public isOwn: Boolean = true;
    constructor(public message: string = '', date: string = '') {
      this.sent = new Date(date);
      this.isOwn = false;      
    }
  }