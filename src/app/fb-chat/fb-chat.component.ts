import { Component, NgZone, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { SignalRService } from '../signalR.service';
import { ChatMessage } from '../models/chatMessage.model';

@Component({
  selector: 'app-fb-chat',
  templateUrl: './fb-chat.component.html',
  styleUrls: ['./fb-chat.component.css'],
  providers: [SignalRService]
})
export class FbChatComponent implements AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  currentMessage: ChatMessage;
  allMessages: ChatMessage[];
  canSendMessage: boolean;
  date: string;

  constructor(private _signalRService: SignalRService,
    private _ngZone: NgZone) {
    this.subscribeToEvents();
    this.currentMessage = new ChatMessage();
    this.allMessages = [];
  }

  sendMessage(message: string) {
    if (this.canSendMessage) {
      this.currentMessage.sent = new Date();
      this.currentMessage.message = message;
      this.currentMessage.isOwn = true;
      this.currentMessage.isFb = false;
      const time = new Date;
      this.date = time.getHours() + ":" + time.getMinutes()
      this.allMessages.push(this.currentMessage);
      this._signalRService.sendChatMessage(this.currentMessage);
      this.currentMessage = new ChatMessage();
    }
  }

  private subscribeToEvents(): void {
    this._signalRService.connectionEstablished.subscribe(() => {
      this.canSendMessage = true;
    });

    this._signalRService.messageReceived.subscribe((message: ChatMessage) => {
      this._ngZone.run(() => {
        this.currentMessage = new ChatMessage();
        var chatmsg = new ChatMessage(message.message);
        chatmsg.isFb = true;
        chatmsg.isOwn = false;
        this.allMessages.push(
          chatmsg
        );
      });
    });
  }
}
