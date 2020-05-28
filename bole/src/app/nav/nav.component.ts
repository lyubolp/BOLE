import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBarService } from '../services/search-bar.service';
import { LoginService } from '../services/login.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  user: User;
  userLoggedIn = false;
  avatar = 'assets/icons/person-24px.svg';

  userDropdown: HTMLElement;
  searchText:string = '';

  constructor(public router: Router, private searchBarService: SearchBarService, private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.user.subscribe(user => {
      this.user = user;
      
      if (this.user.userId === -1) {
        this.userLoggedIn = false;
      } else {
        this.userLoggedIn = true;
      }
    });

    this.userDropdown = document.getElementById('user-dropdown');

    // Hide the user drop down menu if clicked outside
    document.addEventListener('click', (event) => {
      if (this.userDropdown.style.visibility === '') {
        if (event.target instanceof Node) {
          const userDropdownParent = document.getElementById('user-list-element');
          if (!userDropdownParent.contains(event.target)) {
            this.userDropdown.style.visibility = 'hidden';
          }
        }
      }
    });
  }

  updateSearchText() {
    this.searchBarService.changeSearchText(this.searchText);
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

  toggleUserDropdown(event: MouseEvent) {
    if (!this.userDropdown) {
      this.userDropdown = document.getElementById('user-dropdown');
    }
    if (this.userDropdown) {
      if (this.userDropdown.style.visibility === '') {
        this.userDropdown.style.visibility = 'hidden';
      } else {
        this.userDropdown.style.visibility = '';
      }
    }
  }

  logout(): void {
    this.loginService.changeUser("");
  }
}
