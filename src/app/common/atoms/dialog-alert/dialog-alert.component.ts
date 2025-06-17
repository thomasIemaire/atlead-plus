import { Component, Input } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'atlead-dialog-alert',
  imports: [ 
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
  @Input() title: string = 'Title';
  @Input() message: string = 'lorem ipsum dolor sit amet, consectetur adipiscing elit.';

  public visible: boolean = true;

  public showDialog(): void {
    this.visible = true;
  }

  public hideDialog(): void {
    this.visible = false;
  }

}
