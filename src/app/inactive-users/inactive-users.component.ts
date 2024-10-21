import { Component, AfterContentChecked } from '@angular/core';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements AfterContentChecked {
  users$: Observable<Array<string>> = this.userService.inactiveUsers$;

  constructor(private userService: UsersService) {}

  ngAfterContentChecked(): void {
    this.userService.initValues();
  }

  setToActive(user: string) {
    this.userService.setUserToActive(user);
  }
}
