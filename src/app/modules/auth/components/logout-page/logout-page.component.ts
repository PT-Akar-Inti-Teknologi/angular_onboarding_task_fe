import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../../services/logout.service';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.scss']
})
export class LogoutPageComponent implements OnInit {

  constructor(
    private logoutService: LogoutService
  ) { }

  ngOnInit(): void {
    this.logoutService.onSignOut();
  }

}
