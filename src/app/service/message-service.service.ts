import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  private storageKey = 'user_data';

  addUserData(userData: any) {
    const userCollection = this.getUserDataCollection();
    userCollection.push(userData);
    localStorage.setItem(this.storageKey, JSON.stringify(userCollection));
  }

  getUserDataCollection(): any[] {
    const userCollection = localStorage.getItem(this.storageKey);
    return userCollection ? JSON.parse(userCollection) : [];
  }
}
