import { Component, OnInit } from '@angular/core';
import { TokenService } from './services/token.service';
import { UserService } from './services/user.service';
import { NavigationStart, Router } from '@angular/router';
import { ScreenSizeService } from './services/screen-size.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  private tokenSubscription: Subscription | undefined;

  constructor(
    public screenSizeService: ScreenSizeService,
    public tokenService: TokenService,
    public userService: UserService,
    public router: Router
  ) {
    window.addEventListener('resize', () => {
      this.screenSizeService.setScreenSize(window.innerWidth);
    });
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        const token = this.tokenService.getToken();

        if (!token && event.url !== '/login')
          this.router.navigate(['login']);
        else if (token && event.url === '/login')
          this.router.navigate(['home']);
      }
    });

    this.tokenSubscription = this.tokenService.getTokenObservable().subscribe(token => {
      if (!token) this.router.navigate(['login']);
    });
  }

  ngOnDestroy(): void {
    if (this.tokenSubscription) {
      this.tokenSubscription.unsubscribe();
    }
  }
}
