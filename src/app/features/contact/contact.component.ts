import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Result } from 'src/app/shared/services/users/user.model';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { MessagesService } from '../../shared/services/messages/messages.service';

@Component({
  selector: 'fictizia-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public messages: any[] = [];
  public name: string;
  public user: Result;

  constructor(private messagesService: MessagesService,
              private userService: UsersService,
              private firestore: AngularFirestore,
              private activatedRoute: ActivatedRoute) {
                this.user = this.userService.activeUser;
  }

  public addMessage(message: string): void {
    this.firestore.collection('chats').doc(`${this.messages.length + 1}`).set({
      text: message,
      author: 'Jon'
    });
  }

  public ngOnInit(): void {
    this.firestore.collection('chats').valueChanges().subscribe(data => {
      this.messages = data.map((message) => message );
    });

    // this.messagesService.getMessages().subscribe((data) => this.messages = data);
    this.name = this.activatedRoute.snapshot.params.user;
  }

}
