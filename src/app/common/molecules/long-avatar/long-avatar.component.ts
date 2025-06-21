import { Component, Input } from '@angular/core';
import { AvatarDetailsComponent } from "../avatar-details/avatar-details.component";
import { UserAvatarDetails, UserAvatarDetailsComponent } from "../user-avatar-details/user-avatar-details.component";

@Component({
  selector: 'atlead-long-avatar',
  imports: [AvatarDetailsComponent, UserAvatarDetailsComponent],
  templateUrl: './long-avatar.component.html',
  styleUrl: './long-avatar.component.scss'
})
export class LongAvatarComponent {
  @Input() type: 'user' | 'entity' = 'user';
  @Input() height: 'small' | 'medium' | 'large' | string = '';
  @Input() width: 'small' | 'medium' | 'large' | string = '';
  @Input() src: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() details: UserAvatarDetails | null = null;
}
