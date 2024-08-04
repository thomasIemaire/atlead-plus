import { Component } from '@angular/core';
import { TokenService } from '../services/token.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  constructor(
    private tokenService: TokenService,
    private userService: UserService,
    private router: Router,
  ) { }

  public logout(): void {
    this.tokenService.remove();
    this.userService.remove();
    this.router.navigate(['login']);
  }

}
