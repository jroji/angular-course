import { Component, OnInit } from '@angular/core';
import { User } from './shared/services/users/user.model';
import { UsersService } from './shared/services/users/users.service';
@Component({
  selector: 'fictizia-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public users: User;

  constructor(private usersService: UsersService) {}

  public ngOnInit(): void {
    this.usersService.getUsers().subscribe((users) => this.users = users );
  }
}
