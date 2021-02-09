import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { MessagesModule } from './messages/messages.module';
import { RouterModule } from '@angular/router';
import { TextButtonComponent } from './text-button/text-button.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactComponent,
    TextButtonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MessagesModule,
    RouterModule.forChild([{
      path: '',
      component: ContactComponent
    }])
  ]
})
export class ContactModule { }
