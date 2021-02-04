
import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../services/users/user.model';

@Component({
  selector: 'fictizia-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() user: Result;
}
