import { Component } from '@angular/core';

import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';

import { AppSidebarComponent } from './common/organisms/app-sidebar/app-sidebar.component';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from './common/organisms/app-header/app-header.component';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ConfirmPopupModule,
    ToastModule,
    AppSidebarComponent,
    AppHeaderComponent
],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
