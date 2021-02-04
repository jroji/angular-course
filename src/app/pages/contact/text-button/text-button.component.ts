import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'fictizia-text-button',
  templateUrl: './text-button.component.html',
  styleUrls: ['./text-button.component.css']
})
export class TextButtonComponent {
  @Input() public buttonLabel = '';
  @Output() private messageSent = new EventEmitter();

  public inputValue = '';

  public showMessage(): void {
    this.messageSent.emit(this.inputValue);
    this.inputValue = '';
  }


}
