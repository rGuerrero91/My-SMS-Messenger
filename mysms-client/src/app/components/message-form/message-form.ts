import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageService } from '../../services/message-service';

@Component({
  selector: 'app-message-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './message-form.html',
  styleUrls: ['./message-form.css']
})

export class MessageForm {
  @Output() messageSent = new EventEmitter<void>();
  messageForm: FormGroup;

  constructor(private fb: FormBuilder, private messageService: MessageService) {
    this.messageForm = this.fb.group({
      phoneNumber: ['+18777804236', Validators.required], // Default phone number for twilio virtual phone
      body: ['', [Validators.required, Validators.maxLength(250)]]
    });
  }

  async onSubmit() {
    if (this.messageForm.valid) {
      try {
        const { phoneNumber, body } = this.messageForm.value;
        await this.messageService.sendMessage(phoneNumber, body);
        console.log('Message sent successfully');
        this.messageForm.reset();
        this.messageSent.emit();
      } catch (err: any) {
        console.error('Failed to send message', err.message);
      }
    }
  }

  onClear(): void {
    this.messageForm.reset();
  }
}

