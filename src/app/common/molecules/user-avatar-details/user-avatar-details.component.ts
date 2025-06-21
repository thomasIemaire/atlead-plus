import { Component, Input } from '@angular/core';
import { AvatarStateComponent } from "../../atoms/avatar-state/avatar-state.component";
import { AvatarComponent } from '../../atoms/avatar/avatar.component';

export interface UserAvatarDetails {
  tag?: string;
  state?: 'active' | 'inactive' | 'pending';
  entity?: string;
}

@Component({
  selector: 'atlead-user-avatar-details',
  imports: [AvatarComponent, AvatarStateComponent],
  templateUrl: './user-avatar-details.component.html',
  styleUrl: './user-avatar-details.component.scss'
})
export class UserAvatarDetailsComponent {
  @Input() height: 'small' | 'medium' | 'large' | string = '';
  @Input() width: 'small' | 'medium' | 'large' | string = '';
  @Input() type: 'user' | 'entity' = 'user';
  @Input() src: string = '';
  @Input() details: UserAvatarDetails | null = null;
}
