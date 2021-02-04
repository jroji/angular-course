import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fictizia-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  /**
   * Show the list of messages
   */
  @Input() public messages: string[] = [];
}
