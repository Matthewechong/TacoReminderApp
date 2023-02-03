import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from '../config/data.service';
import { User } from '../objects/user';
import { UtilityService } from '../utility.service';
import { ConfirmComponent } from '../confirm/confirm.component';
import { MatDialog } from '@angular/material';
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
  constructor(private http : HttpClient, public dialog: MatDialog, private util :UtilityService) { }

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
      }
      this.dataService.putData(JSON.stringify(this.user),environment.newUser)
    }
    
  }

}

// @Component({
//   selector: 'dialog-animations-example-dialog',
//   templateUrl: 'dialog-animations-example-dialog.html',
// })
// export class DialogAnimationsExampleDialog {
//   constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
// }
