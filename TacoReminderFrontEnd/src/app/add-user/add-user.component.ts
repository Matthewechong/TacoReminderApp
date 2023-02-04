import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject} from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from '../config/data.service';
import { User } from '../objects/user';
import { UtilityService } from '../utility.service';
import { ConfirmComponent } from '../confirm/confirm.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{
  user : User
  email: '';
  name : '';
  dataService : DataService;
  constructor(private http : HttpClient, private util :UtilityService, public dialog : MatDialog) { }

  openDialog(){
    console.log("working")
    this.dialog.open(ConfirmComponent);
  }


  ngOnInit(): void {
    this.dataService = new DataService(this.http);
  }

  click(route){
    this.util.clickToRoute(route);
  }

  clickAdd()
  {
    if(this.email != '' && this.name != ''){
      this.user = {
        "name" : this.name,
        "email" : this.email,
        "taco_count" : 0,
        "memo" : " "
      }
      this.dataService.putData(JSON.stringify(this.user),environment.newUser)
    }
    
  }

}