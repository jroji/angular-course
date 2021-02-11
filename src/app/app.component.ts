import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Result, User } from './shared/services/users/user.model';
import { UsersService } from './shared/services/users/users.service';
@Component({
  selector: 'fictizia-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public users: Result[];

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
    private cd: ChangeDetectorRef,
  ) {}

  public ngOnInit(): void {
    this.usersService.getUsers().subscribe((users) => {
      this.users = users;
    });

  }
}
