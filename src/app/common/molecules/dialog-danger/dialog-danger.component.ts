import { Component, Input } from '@angular/core';
import { DialogAlertComponent } from "../../atoms/dialog-alert/dialog-alert.component";

@Component({
  selector: 'atlead-dialog-danger',
  imports: [DialogAlertComponent],
  templateUrl: './dialog-danger.component.html',
  styleUrl: './dialog-danger.component.scss'
})
export class DialogDangerComponent {
  @Input() message: string = 'Veuillez réessayer plus tard.';
}
