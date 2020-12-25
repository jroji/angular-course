import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  public messages: string[] = [];
  public value = '';

  public updateMessage() {
    this.messages = [...this.messages, this.value];
    this.value = '';
  }
}
