import { fail } from "assert";

export class ChatMessage {
    public sent: Date;
    public isOwn: Boolean = true;
    public isFb: Boolean = true;
    constructor(public message: string = '') {
      this.isOwn = false;      
    }
  }