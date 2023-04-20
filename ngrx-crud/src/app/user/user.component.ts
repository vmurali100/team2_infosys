import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Store } from '@ngrx/store';
import { UserService } from '../user.service';
import { UserApiActions } from '../user.actions';
import { selectUsers } from '../user.selector';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userDetails: User = {
    fname: '',
    lname: '',
    id: null,
  };

  constructor(private store: Store, private userService: UserService) {}
  users$ = this.store.select(selectUsers);
  isEdit = false;
  getAllUsers() {
    this.userService.getUsers().subscribe((users) => {
      console.log(users);
      this.store.dispatch(UserApiActions.retrieveUsersList({ users }));
    });
  }
  ngOnInit() {
    this.getAllUsers();
  }
  deleteUser(user: User) {
    this.userService.deleteUser(user).subscribe(() => {
      this.getAllUsers();
    });
  }
  addUser() {
    this.userService.addUser(this.userDetails).subscribe(() => {
      this.getAllUsers();
      this.clearForm();
    });
  }
  clearForm() {
    this.userDetails = {
      fname: '',
      lname: '',
      id: null,
    };
  }
  editUser(user: User) {
    this.userDetails = { ...user };
    this.isEdit = true;
  }
  updateUser() {
    this.userService.updateUser(this.userDetails).subscribe((res) => {
      this.getAllUsers();
      this.isEdit = false;
      this.clearForm();
    });
  }
}
