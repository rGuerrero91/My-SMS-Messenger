import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-item',
  imports: [CommonModule],
  templateUrl: './message-item.html',
  styleUrls: ['./message-item.css']
})
export class MessageItem {
  @Input() message: any;
}
