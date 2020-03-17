import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  username = 'Гост';
  avatar = 'assets/icons/person-24px.svg';

  constructor() { }

  ngOnInit() {
  }

  mouseEnterNavItem(event: MouseEvent) {
    if (event.target instanceof HTMLElement) {
      const target = event.target as HTMLElement;
      (target.children[0] as HTMLElement).style.display = 'flex';
    }
  }

  mouseLeaveNavItem(event: MouseEvent) {
    if (event.target instanceof HTMLElement) {
      const target = event.target as HTMLElement;
      (target.children[0] as HTMLElement).style.display = 'none';
    }
  }
}
