import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private activeUsers = ['Max', 'Anna'];
  private inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) {}

  public initValues() {
    this.activeUsers$$.next(this.activeUsers);
    this.inactiveUsers$$.next(this.inactiveUsers);
  }

  private activeUsers$$: Subject<Array<string>> = new Subject<Array<string>>();
  public activeUsers$: Observable<Array<string>> =
    this.activeUsers$$.asObservable();

  private inactiveUsers$$: Subject<Array<string>> = new Subject<
    Array<string>
  >();
  public inactiveUsers$: Observable<Array<string>> =
    this.inactiveUsers$$.asObservable();

  setUserToInactive(user: string) {
    this.inactiveUsers.push(user);
    this.inactiveUsers$$.next(this.inactiveUsers);
    this.activeUsers = this.activeUsers.filter((x) => x !== user);
    this.activeUsers$$.next(this.activeUsers);
    this.counterService.moveActiveToInactive();
  }

  setUserToActive(user: string) {
    this.activeUsers.push(user);
    this.activeUsers$$.next(this.activeUsers);
    this.inactiveUsers = this.inactiveUsers.filter((x) => x !== user);
    this.inactiveUsers$$.next(this.inactiveUsers);
    this.counterService.moveInactiveToActive();
  }
}
