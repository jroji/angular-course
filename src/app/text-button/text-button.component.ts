import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'text-button',
  templateUrl: './text-button.component.html',
  styleUrls: ['./text-button.component.css']
})
export class TextButtonComponent {
  @Input() public buttonLabel: string;
  @Output() public actionClick = new EventEmitter();
  public value: string;

  public buttonClicked() {
    console.log(this.value);
    this.actionClick.emit(this.value);
    this.value = '';
  }
}