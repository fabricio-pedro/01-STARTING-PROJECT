import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';

const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
   selectUser=DUMMY_USERS[randomIndex];
}
