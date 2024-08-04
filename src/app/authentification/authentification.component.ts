import { Component } from '@angular/core';
import { TokenService } from '../services/token.service';
import { LocalStorageService } from '../services/local-storage.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrl: './authentification.component.scss'
})
export class AuthentificationComponent {

  constructor(
    private tokenService: TokenService,
    private localStorageService: LocalStorageService,
    private userService: UserService,
    private router: Router
  ) { }

  public login(): void {
    this.tokenService.setToken('0')
    this.router.navigate(['planning']);
  }
  
}
