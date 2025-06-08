import { Component } from '@angular/core';
import { MessageForm } from '../../components/message-form/message-form';
import { MessageList } from '../../components/message-list/message-list';

@Component({
  selector: 'app-messages-page',
  standalone: true,
  imports: [MessageForm, MessageList],
  templateUrl: './messages-page.html',
  styleUrls: ['./messages-page.css']
})
export class MessagesPage {}
