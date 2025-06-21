import { Component, Input } from '@angular/core';
import { DialogAlertComponent } from '../../atoms/dialog-alert/dialog-alert.component';

@Component({
  selector: 'atlead-dialog-success',
  imports: [DialogAlertComponent],
  templateUrl: './dialog-success.component.html',
  styleUrl: './dialog-success.component.scss'
})
export class DialogSuccessComponent extends DialogAlertComponent {
}
