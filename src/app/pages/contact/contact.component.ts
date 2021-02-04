import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { MessagesService } from '../../shared/services/messages/messages.service';

@Component({
  selector: 'fictizia-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public messages: string[] = [];
  public name: string;

  constructor(private messagesService: MessagesService,
              private activatedRoute: ActivatedRoute) {}

  public addMessage(message: string): void {
    this.messages.push(message);
  }

  public ngOnInit(): void {
    this.messagesService.getMessages().subscribe((data) => this.messages = data);
    this.name = this.activatedRoute.snapshot.params.user;
  }

}
