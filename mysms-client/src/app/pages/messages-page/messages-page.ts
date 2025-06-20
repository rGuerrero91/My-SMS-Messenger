import { Component, ViewChild } from '@angular/core';
import { MessageForm } from '../../components/message-form/message-form';
import { MessageList } from '../../components/message-list/message-list';

@Component({
  selector: 'app-messages-page',
  standalone: true,
  imports: [MessageForm, MessageList],
  template: `
    <h2>Messages</h2>
    <div class="messages-layout">
    <div class="form">
    <app-message-form (messageSent)="reloadMessages()"></app-message-form>
    </div>
    <div class="list">
    <app-message-list #messageList></app-message-list>
    </div>
</div>
  `,
  styleUrls: ['./messages-page.css'],
})
export class MessagesPage {
  @ViewChild('messageList') messageList!: MessageList;

  reloadMessages() {
    this.messageList.fetchMessages();
  }
}