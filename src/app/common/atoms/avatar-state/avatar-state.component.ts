import { Component, Input } from '@angular/core';

@Component({
  selector: 'atlead-avatar-state',
  imports: [],
  templateUrl: './avatar-state.component.html',
  styleUrl: './avatar-state.component.scss'
})
export class AvatarStateComponent {
  @Input() state: 'active' | 'inactive' | 'pending' = 'inactive';
}
