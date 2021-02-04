import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root' })
export class MessagesService {
  private baseUrl = 'https://baconipsum.com/api/';

  constructor(private httpClient: HttpClient) { }

  public getMessages(): Observable<string[]> {
    return this.httpClient.get(`${this.baseUrl}?type=all-meat&sentences=1&start-with-lorem=2`) as Observable<string[]>;
  }

}
