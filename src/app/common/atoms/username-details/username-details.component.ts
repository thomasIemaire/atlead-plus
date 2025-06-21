import { Component, Input } from '@angular/core';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'atlead-username-details',
  imports: [TagModule],
  templateUrl: './username-details.component.html',
  styleUrl: './username-details.component.scss'
})
export class UsernameDetailsComponent {
  @Input() username: string = '';
  @Input() tag: string = '';
}
