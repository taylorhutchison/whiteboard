import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import config from '../../config.json';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor(private http: HttpClient) { }

  createRoom(): Observable<string> {
    const url = config.azfunctions.createroom;
    const subject = new Subject<string>();
    this.http.get<string>(url, { responseType: 'text' } as any).subscribe(response => {
      subject.next(response as any);
    });
    return subject;
  }
}
