import { Component, Input } from '@angular/core';

@Component({
  selector: 'atlead-avatar',
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  @Input() height: 'small' | 'medium' | 'large' | string = '';
  @Input() width: 'small' | 'medium' | 'large' | string = '';
  @Input() type: 'user' | 'entity' = 'user';
  @Input() src: string = '';

  public size(x: string): string {
    switch (x) {
      case 'small':
        return '24px';
      case 'medium':
        return '48px';
      case 'large':
        return '64px';
      default:
        return x;
    }
  }
}
