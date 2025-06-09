import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MessageService {
  // in a bit of a time crunch, gonna hardcode it for now so I can deploy and submit.
  private apiUrl = 'https://my-sms-messenger-o9qu.onrender.com/messages';

  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    return {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: token } : {})
    };
  }

  async getMessages(): Promise<any[]> {
    const response = await fetch(this.apiUrl, {
      headers: this.getAuthHeaders()
    });
    if (!response.ok) throw new Error('Failed to fetch messages');
    return await response.json();
  }

  async sendMessage(phoneNumber:string, body: string): Promise<any> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ message: { to: phoneNumber, body: body } })
    });
    if (!response.ok) throw new Error('Failed to send message');
    return await response.json();
  }
}
