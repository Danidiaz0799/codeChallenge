import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.scss']
})
export class LayoutPageComponent {

  public sidebarItems = [
    { label: 'Kansas Weather', icon: 'label', url: './kansas' },
    { label: 'Columbia Weather', icon: 'label', url: './columbia' },
  ];

}
