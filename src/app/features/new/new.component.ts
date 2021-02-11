import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { combineLatest, forkJoin } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

interface DemoUser {
  username: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    extra?: string;
    country: 'Spain' | 'Portugal';
  };
}
@Component({
  selector: 'fictizia-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  public userForm = this.fb.group({
    username: ['', Validators.minLength(3)],
    name: this.fb.group({
      firstname: ['', [Validators.pattern('.*Z.*'), Validators.pattern('.*[0-9].*')]],
      lastname: [''],
    }),
    address: this.fb.group({
      city: [''],
      street: [''],
      extra: [''],
      country: [''],
    })
  });

  public ngOnInit(): void {
    combineLatest([
      this.userForm.get('address').get('city').valueChanges,
      this.userForm.get('address').get('street').valueChanges,
    ])
      .pipe(
        filter(([city, street]) => city.length > 0 && street.length > 0),
        debounceTime(300)
      )
      .subscribe(([city, street]) => {
        console.log(city, street);
      });

  }

  public update(): void {
    const demo = {
      username: 'joroji',
      name: {
        firstname: 'Jon',
        lastname: 'Roji',
      },
      address: {
        city: 'Madrid',
        street: 'XXX',
        patch: '3 gatos tiene el tio',
        country: 'Spain'
      }
    };

    this.userForm.setValue(demo);
  }
}
