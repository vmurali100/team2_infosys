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
    date:'',
    dec:''
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
      this.store.dispatch(UserApiActions.deleteUsersList({ user }));
    });
  }
  addUser() {
    let user = this.userDetails;
    this.userService.addUser(this.userDetails).subscribe(() => {
      this.clearForm();
      this.store.dispatch(UserApiActions.addUsersList({ user }));
    });
  }
  clearForm() {
    this.userDetails = {
      fname: '',
      lname: '',
      id: null,
      date:'',
      dec:''
    };
  }
  editUser(user: User) {
    this.userDetails = { ...user };
    this.isEdit = true;
  }
  updateUser() {
    let user = this.userDetails
    this.userService.updateUser(this.userDetails).subscribe((res) => {
      this.store.dispatch(UserApiActions.updateUsersList({user}))
      this.isEdit = false;
      this.clearForm();
    });
  }
}
