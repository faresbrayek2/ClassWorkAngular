import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
})
export class FormUserComponent {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    category: 'Customer',
    password: '',
  };

  @Output() userAdded = new EventEmitter<User>();

  onSubmit() {
    if (this.user.category === 'Customer') {
      this.userAdded.emit(this.user);
      this.resetForm();
    }
  }

  resetForm() {
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      category: 'Customer',
      password: '',
    };
  }
}
