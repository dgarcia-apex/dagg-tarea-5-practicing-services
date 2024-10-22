import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  activeUsers = 2;
  inactiveUsers = 2;
  constructor() {
    console.log('activeUsers', this.activeUsers);
    console.log('inactiveUsers', this.inactiveUsers);
  }

  moveActiveToInactive() {
    this.activeUsers--;
    this.inactiveUsers++;
    console.log('activeUsers', this.activeUsers);
    console.log('inactiveUsers', this.inactiveUsers);
  }

  moveInactiveToActive() {
    this.activeUsers++;
    this.inactiveUsers--;
    console.log('activeUsers', this.activeUsers);
    console.log('inactiveUsers', this.inactiveUsers);
  }
}
