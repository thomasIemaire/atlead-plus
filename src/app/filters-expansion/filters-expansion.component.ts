import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters-expansion',
  templateUrl: './filters-expansion.component.html',
  styleUrl: './filters-expansion.component.scss'
})
export class FiltersExpansionComponent implements OnInit {

  public filtersIsActive: boolean = false;

  ngOnInit(): void {
    document.documentElement.style.setProperty('--atlead-height-filters', this.filtersIsActive ? '100px' : '0px');
  }

  public toggleFilters(): void {
    this.filtersIsActive = !this.filtersIsActive;
    document.documentElement.style.setProperty('--atlead-height-filters', this.filtersIsActive ? '100px' : '0px');
  }

}
