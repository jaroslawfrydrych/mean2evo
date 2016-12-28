import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from './../../services/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    if (this.router.url === '/admin')
      this.router.navigate(['/admin/dashboard']);
  }

  logout() {
    console.log('logout');

    this.authenticationService.logout()
      .subscribe(
        res => {
          this.router.navigate(['/admin/login']);

        }
      );
  }
}
