import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(environment.dataUrl)
  }
}