import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Result, User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = 'https://randomuser.me/api/';
  private results$ = new ReplaySubject<User>();
  public activeUser;

  constructor(private httpClient: HttpClient) {
    this.httpClient.get(`${this.baseUrl}?results=50`)
      .subscribe((results) => {
        this.results$.next(results as User);
      });
  }

  public getUsers(users = 6): Observable<Result[]> {
    return this.results$.pipe(
      map((results) => {
        const resultCopy = {...results};
        resultCopy.results = resultCopy.results.slice(0, users);
        return resultCopy.results;
      })
    );
  }

}
