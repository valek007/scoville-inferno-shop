import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Reactive state management for current authenticated user
  private currentUserSubject = new BehaviorSubject<User | null>({
    id: 'usr-1',
    email: 'survivor@scoville.com',
    name: 'Last Survivor'
  });

  public currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();

  /**
   * Returns current user snapshot
   */
  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  /**
   * Mock login method
   */
  login(user: User): void {
    this.currentUserSubject.next(user);
  }

  /**
   * Mock logout method
   */
  logout(): void {
    this.currentUserSubject.next(null);
  }
}