import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserApiActions } from './user.actions';
import { User } from './user.model';
import { selectUsers } from './users.selector';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app9-ngrx-crud';

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
    this.isEdit = true
  }
  updateUser() {
    this.userService.updateUser(this.userDetails).subscribe((res) => {
      this.getAllUsers();
      this.isEdit = false;
      this.clearForm();
    });
  }
}
