import { Component, Input } from '@angular/core';

@Component({
  selector: 'fictizia-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  @Input() public msg = '';
}
