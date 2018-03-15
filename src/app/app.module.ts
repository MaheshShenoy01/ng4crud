// core imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

// component imports
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { FindUserComponent } from './components/find-user/find-user.component';
import { RemoveUserComponent } from './components/remove-user/remove-user.component';

// service imports
import { CrudService } from './services/crud-service/crud.service';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    EditUserComponent,
    FindUserComponent,
    RemoveUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
