import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { User } from './types/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'easy-task';
  users = DUMMY_USERS;
  selectedUser: User = DUMMY_USERS[0];
  onSelectUser(userId: string) {
    this.selectedUser = DUMMY_USERS.find((user) => user.id === userId)!;
    // this.selectedUser.avatar = 'assets/users/' + this.selectedUser.avatar;
  }
}
