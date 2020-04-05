import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserProfileGateway, UserProfile } from '@type-safe-full-stack/shared/domain';

@Injectable({ providedIn: 'root' })
export class ApiGatewayFacade implements IUserProfileGateway {
  constructor(private http: HttpClient) {}

  getUserProfile(userId: string): Promise<UserProfile | undefined> {
    return this.http.get<UserProfile>(`http://localhost:3335/api/user-profile/${userId}`).toPromise();
  }

  createUserProfile(userProfile: UserProfile): Promise<UserProfile> {
    return this.http.post<UserProfile>('http://localhost:3335/api/user-profile', userProfile).toPromise();
  }
}
