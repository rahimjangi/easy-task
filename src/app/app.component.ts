import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { User } from './types/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    UserComponent,
    CommonModule,
    TasksComponent,
  ],
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
