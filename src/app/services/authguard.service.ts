import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(
    private tokenService: TokenService, 
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.tokenService.getToken()) return true; 
    this.router.navigate(['login']);
    return false;
  }
}
