import { Component } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-main-user',
  templateUrl: './main-user.component.html',
  styleUrls: ['./main-user.component.css'],
})
export class MainUserComponent {
  users: User[] = [];

  addUser(user: User) {
    this.users.push(user);
  }
}
