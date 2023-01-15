import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../objects/user';
@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<User[]>(environment.dataUrl)
  }

  putData(data,url){
    return this.http.put<User[]>(url,data).subscribe()
  }
}