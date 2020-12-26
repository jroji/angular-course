import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public messages: string[] = [];

  public sendMessage(message: string) {
    console.log(12);
    this.messages = [...this.messages, message];
  }
}
