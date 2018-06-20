import { Component, NgZone } from '@angular/core';
import { SignalRService } from '../signalR.service';
import { ChatMessage } from '../models/chatMessage.model';

@Component({
  selector: 'app-fb-chat',
  templateUrl: './fb-chat.component.html',
  styleUrls: ['./fb-chat.component.css']
})
export class FbChatComponent {
  currentMessage: ChatMessage;
  allMessages: ChatMessage[];
  canSendMessage: boolean;

  constructor(private _signalRService: SignalRService,
    private _ngZone: NgZone) {
    this.subscribeToEvents();
    this.currentMessage = new ChatMessage();
    this.allMessages = [];
  }

  sendMessage() {
    if (this.canSendMessage) {
      this.currentMessage.sent = new Date();
      this._signalRService.sendChatMessage(this.currentMessage);
    }
  }

  private subscribeToEvents(): void {
    this._signalRService.connectionEstablished.subscribe(() => {
      this.canSendMessage = true;
    });

    this._signalRService.messageReceived.subscribe((message: ChatMessage) => {
      this._ngZone.run(() => {
        this.currentMessage = new ChatMessage();
        this.allMessages.push(
          new ChatMessage(message.message, message.sent.toString())
        );
      });
    });
  }
}
