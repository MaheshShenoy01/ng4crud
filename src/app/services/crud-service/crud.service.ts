import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { IuserInterface } from '../../interfaces/user.interface';

@Injectable()
export class CrudService {

  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<IuserInterface> {
    const usersUrl = '../../../assets/mock/users.json';
    return this.httpClient.get<IuserInterface>(usersUrl);
  }

  public editUserAndUpdate() {

  }

}
