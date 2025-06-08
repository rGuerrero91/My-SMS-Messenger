import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './message-form.html',
  styleUrls: ['./message-form.css']
})

export class MessageForm {
  messageForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.messageForm = this.fb.group({
      phoneNumber: ['', Validators.required],
      body: ['', [Validators.required, Validators.maxLength(250)]]
    });
  }

  onSubmit(): void {
    if (this.messageForm.valid) {
      // Call service to send message
    }
  }

  onClear(): void {
    this.messageForm.reset();
  }
}

