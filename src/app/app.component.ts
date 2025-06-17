import { Component } from '@angular/core';

import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';

import { AppSidebarComponent } from './common/organisms/app-sidebar/app-sidebar.component';
import { RouterOutlet } from '@angular/router';
import { DialogDangerComponent } from "./common/molecules/dialog-danger/dialog-danger.component";
import { DialogWarningComponent } from "./common/molecules/dialog-warning/dialog-warning.component";
import { DialogSuccessComponent } from "./common/molecules/dialog-success/dialog-success.component";


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ConfirmPopupModule,
    ToastModule,
    AppSidebarComponent,
    DialogDangerComponent,
    DialogWarningComponent,
    DialogSuccessComponent
],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  ngOnInit(): void {

  }

}
