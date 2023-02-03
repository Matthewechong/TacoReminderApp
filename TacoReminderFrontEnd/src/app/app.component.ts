import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router : Router){
    
  }
  ngOnInit(): void {
   
  }

  clickToRoute(route){
    this.router.navigate([route])
  }


  title = 'TacoReminderFrontEnd';
}