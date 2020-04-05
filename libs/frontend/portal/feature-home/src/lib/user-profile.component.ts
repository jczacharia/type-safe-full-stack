import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiGatewayFacade } from '@type-safe-full-stack/frontend/shared/data-access';
import { UserProfile } from '@type-safe-full-stack/shared/domain';

@Component({
  selector: 'user-profile',
  template: `
    <p>{{ res | json }}</p>
    <p>Get UserProfile</p>
    <input [formControl]="idGet" />
    <button (click)="getUserProfile()">Get UserProfile</button>
    <p>Create UserProfile</p>
    <input [formControl]="idCreate" />
    <button (click)="createUserProfile()">Create UserProfile</button>
    <p>{{ createRes }}</p>
  `,
})
export class UserProfileComponent implements OnInit {
  res!: UserProfile | string;
  createRes = '';

  idGet = new FormControl('');
  idCreate = new FormControl('');

  constructor(private readonly api: ApiGatewayFacade) {}

  ngOnInit() {}

  async getUserProfile() {
    if (!this.idGet.value) {
      this.res = 'ID cannot be blank';
      return;
    }
    try {
      // Put UserProfile ID here
      const res = await this.api.getUserProfile(this.idGet.value);
      if (res) {
        this.res = res;
      } else {
        this.res = 'UserProfile not found';
      }
    } catch (error) {
      this.res = 'Could not connect to backend. See console for log';
      console.error('Could not connect to backend:', error);
    }
  }

  async createUserProfile() {
    if (!this.idCreate.value) {
      this.createRes = 'ID cannot be blank';
      return;
    }
    try {
      await this.api.createUserProfile({
        id: this.idCreate.value,
        username: 'userName',
        email: 'email@email.com',
        name: 'Name',
        city: 'Pittsburgh',
        state: 'PA',
      });
      this.createRes = 'Success';
    } catch (error) {
      this.createRes = 'Could not connect create UserProfile. See console for log';
      console.error('Could not create UserProfile:', error);
    }
  }
}
