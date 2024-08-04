import { Component, Input, OnInit } from '@angular/core';
import { AppearanceService } from '../../services/appearance.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit {

  @Input({ required: true }) title: string = '';
  @Input({ required: true }) subtitle: string = '';

  constructor(
    public appearanceService: AppearanceService
  ) { }

  ngOnInit(): void {
    if (!this.appearanceService.banner)
      document.documentElement.style.setProperty('--atlead-height-banner', '0px');
    else
      document.documentElement.style.setProperty('--atlead-height-banner', '120px');
  }

}
