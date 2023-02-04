import { NameSelectComponent } from './name-select/name-select.component';
import { AddUserComponent } from './add-user/add-user.component';
import { NgModule } from '@angular/core';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { HomeComponent } from './home/home.component';
import { UtilityService } from './utility.service';
import { ConfirmComponent } from './confirm/confirm.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    NameSelectComponent,
    AddUserComponent,
    HomeComponent,
    ConfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule
  ],
  entryComponents:[ConfirmComponent],
  providers: [UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
