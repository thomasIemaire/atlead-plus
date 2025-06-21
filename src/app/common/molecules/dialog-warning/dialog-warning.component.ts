import { Component, Input } from '@angular/core';
import { DialogAlertComponent } from '../../atoms/dialog-alert/dialog-alert.component';

@Component({
  selector: 'atlead-dialog-warning',
  imports: [DialogAlertComponent],
  templateUrl: './dialog-warning.component.html',
  styleUrl: './dialog-warning.component.scss'
})
export class DialogWarningComponent extends DialogAlertComponent {
}
