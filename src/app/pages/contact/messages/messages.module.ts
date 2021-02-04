import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { MessageComponent } from './message/message.component';
import { MimimiPipe } from '../../../shared/pipes/mimimi.pipe';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MimimiPipe,
    MessagesComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MessagesComponent,
  ]
})
export class MessagesModule { }
