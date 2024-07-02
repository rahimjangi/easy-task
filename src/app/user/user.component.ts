import {
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
  input,
  output,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from '../types/user';
import { CardComponent } from '../shared/card/card.component';

const randomIndex = Math.floor(DUMMY_USERS.length * Math.random());

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) selected!: boolean;
  @Input({ required: true }) user!: User;

  @Output() select = new EventEmitter<string>();

  onSelectUser() {
    this.select.emit(this.user.id);
  }
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
}
