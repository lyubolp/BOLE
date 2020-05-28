import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.loginService.changeUser("ivan");
    this.router.navigate(['/']);
  }
  
  loginGuest(): void {
    this.loginService.changeUser("");
    this.router.navigate(['/']);
  }
}
