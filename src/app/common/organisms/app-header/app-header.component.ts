import { Component } from '@angular/core';
import { HeaderNavigationComponent } from "../../atoms/header-navigation/header-navigation.component";
import { LongAvatarComponent } from "../../molecules/long-avatar/long-avatar.component";

@Component({
  selector: 'atlead-app-header',
  imports: [HeaderNavigationComponent, LongAvatarComponent],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {

}
