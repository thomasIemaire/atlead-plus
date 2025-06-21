import { Component, Input } from '@angular/core';
import { UsernameDetailsComponent } from "../../atoms/username-details/username-details.component";

@Component({
  selector: 'atlead-avatar-details',
  imports: [UsernameDetailsComponent],
  templateUrl: './avatar-details.component.html',
  styleUrl: './avatar-details.component.scss'
})
export class AvatarDetailsComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() tag: string = '';
}
