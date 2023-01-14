import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../config/data.service';
import { User } from '../objects/user';
import { environment } from 'src/environments/environment';
interface Food {
  value: string;
  viewValue: string;
}

users : Observable<User[]>

@Component({
  selector: 'app-name-select',
  templateUrl: './name-select.component.html',
  styleUrls: ['./name-select.component.css']
})
export class NameSelectComponent implements OnInit{

  users : User[];

  constructor(private http : HttpClient){
  }
  ngOnInit(): void {

    this.http.get<User[]>(environment.dataUrl).subscribe((res) => {
      this.users = res
    });
    
  }

  // getUsers(){
  //   this.users = this.http.get<User[]>(environment.dataUrl)
  // }
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  

}
