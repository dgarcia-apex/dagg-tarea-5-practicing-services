import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements AfterContentChecked {
  users$: Observable<Array<string>> = this.userService.activeUsers$;

  constructor(private userService: UsersService) {}
  ngAfterContentChecked(): void {
    this.userService.initValues();
  }

  ngOnInit(): void {}

  setToInactive(user: string) {
    this.userService.setUserToInactive(user);
  }
}
