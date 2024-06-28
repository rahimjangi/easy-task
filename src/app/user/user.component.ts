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

const randomIndex = Math.floor(DUMMY_USERS.length * Math.random());

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();

  @Output() select = new EventEmitter<string>();

  onSelectUser() {
    this.select.emit(this.id);
  }
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
}
