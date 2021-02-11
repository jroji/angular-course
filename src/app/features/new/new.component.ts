import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fictizia-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  public user: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  public submit(): void {
    console.log(this.user);
  }
}
