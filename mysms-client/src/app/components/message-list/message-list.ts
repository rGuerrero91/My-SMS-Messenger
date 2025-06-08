import { Component } from '@angular/core';
import { MessageItem } from '../message-item/message-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-list',
  imports: [MessageItem, CommonModule],
  templateUrl: './message-list.html',
  styleUrls: ['./message-list.css']
})
export class MessageList {
  messages = [
    // Example data
    {
      to: '999-888-7777',
      body: 'Hi! This is a message.',
      createdAt: new Date().toUTCString()
    }
  ];
}