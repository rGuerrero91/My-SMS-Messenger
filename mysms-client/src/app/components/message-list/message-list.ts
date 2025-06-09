import { Component } from '@angular/core';
import { MessageItem } from '../message-item/message-item';
import { CommonModule } from '@angular/common';
import { MessageService } from '../../services/message-service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-message-list',
  imports: [MessageItem, CommonModule],
  templateUrl: './message-list.html',
  styleUrls: ['./message-list.css']
})
export class MessageList implements OnInit {
  messages: any[] = [];

  constructor(private messageService: MessageService) {}

  async ngOnInit() {
    await this.fetchMessages();
  }

  async fetchMessages() {
    this.messages = await this.messageService.getMessages();
  }
}