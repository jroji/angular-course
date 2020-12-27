import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { FormsModule } from '@angular/forms';
import { TextButtonComponent } from './text-button/text-button.component';
import { MimimiPipe } from './mimimi.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    TextButtonComponent,
    MimimiPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
