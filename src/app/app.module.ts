import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextButtonComponent } from './pages/contact/text-button/text-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './shared/user/user.component';
import {MatIconModule} from '@angular/material/icon';
import { MessagesModule } from './pages/contact/messages/messages.module';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    TextButtonComponent,
    UserComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    MessagesModule,
    HttpClientModule,
    BrowserModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
