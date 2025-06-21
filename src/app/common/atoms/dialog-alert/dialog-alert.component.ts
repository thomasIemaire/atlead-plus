import { Component, Input, NgModule } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'atlead-dialog-alert',
  imports: [
    CommonModule,
    DialogModule,
    LottieComponent,
    ButtonModule
  ],
  templateUrl: './dialog-alert.component.html',
  styleUrl: './dialog-alert.component.scss'
})
export class DialogAlertComponent {

  @Input() icon: AnimationOptions = {
    path: `assets/lottie/default.json`,
    autoplay: true,
    loop: true
  };
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() showHeader: boolean = false;
  @Input() showFooter: boolean = false;

  public visible: boolean = true;

  public showDialog(): void {
    this.visible = true;
  }

  public hideDialog(): void {
    this.visible = false;
  }

}
