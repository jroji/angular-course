import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users/users.service';

@Component({
  selector: 'fictizia-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public users = [];

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usersService.getUsers(20).subscribe((results) => {
      this.users = results;
    });
  }

  public selectUser(user): void {
    this.usersService.activeUser = user;
    this.router.navigate(['contact', user.name.first]);
  }

}
