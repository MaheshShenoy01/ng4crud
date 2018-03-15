import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CrudService } from '../../services/crud-service/crud.service';

import { IuserInterface } from '../../interfaces/user.interface';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
    public users: IuserInterface;

    constructor(private crudService: CrudService) { }

    public ngOnInit() {
        this.getAllUsers();
    }

    public getAllUsers() {
        this.crudService.getUsers().subscribe(data => {
            this.users = data;
            console.log(data);
        });
    }

    public editUser() {
        // this.crudService.editUserAndUpdate(user);
    }

}
