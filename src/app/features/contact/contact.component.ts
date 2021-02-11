import { Component, OnInit } from '@angular/core';
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
  public messages: string[] = [];
  public name: string;
  public user: Result;

  constructor(private messagesService: MessagesService,
              private userService: UsersService,
              private activatedRoute: ActivatedRoute) {
                this.user = this.userService.activeUser;
  }

  public addMessage(message: string): void {
    this.messages.push(message);
  }

  public ngOnInit(): void {
    this.messagesService.getMessages().subscribe((data) => this.messages = data);
    this.name = this.activatedRoute.snapshot.params.user;
  }

}
