import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenStorageService } from './token-storage.service';




@Injectable({
    providedIn: 'root'
  })
export class AuthGuardService implements CanActivate {  constructor(public auth: TokenStorageService,
     public router: Router) {}  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }}