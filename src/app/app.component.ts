import { Component, OnInit } from '@angular/core';
import { TokenService } from './services/token.service';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { ScreenSizeService } from './services/screen-size.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(
    public screenSizeService: ScreenSizeService,
    public tokenService: TokenService,
    public userService: UserService,
    private router: Router
  ) {
    window.addEventListener('resize', () => {
      this.screenSizeService.setScreenSize(window.innerWidth);
    });
  }

  ngOnInit(): void {
    this.tokenService.setToken('0');

    // User not connected
    if (!this.tokenService.getToken()) this.router.navigate(['login']);
    // User connected
    else this.router.navigate(['messages']);
  }
}
