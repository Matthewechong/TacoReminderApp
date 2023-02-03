import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { DataService } from '../config/data.service';
import { User } from '../objects/user';
import { MatButtonModule } from '@angular/material/button';
import { environment } from 'src/environments/environment';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-name-select',
  templateUrl: './name-select.component.html',
  styleUrls: ['./name-select.component.css']
})
export class NameSelectComponent implements OnInit{

  users : User[];
  dataService : DataService;
  currentUser = '';
  currentEmail = ""
  constructor(private http : HttpClient, private util:UtilityService){

  }
  ngOnInit(): void {
    this.dataService = new DataService(this.http);
    this.dataService.getData().subscribe((res) => {
      this.users = res
    });
    
  }
  click(route){
    this.util.clickToRoute(route);
  }

  textAreaEmpty(){
    if (this.currentUser == '') {
      return true
    }
    return false
  }

  getUser(){
    for(let i = 0; i < this.users.length;i++){
      let current = this.users[i];
      if(current.name == this.currentUser){
        
        return current
      }
    }
    return null
  }

  getEmail(){
    return this.getUser().email;
  }

  getTacoCount(){
    return this.getUser().taco_count;
  }

  clickSend(){
    console.log(JSON.stringify(this.getUser()))
    this.dataService.putData(JSON.stringify(this.getUser()),environment.sendEmailTacoCount)
  }



}
