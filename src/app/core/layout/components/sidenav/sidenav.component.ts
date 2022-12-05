import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { MenuModel } from 'src/app/shared/interfaces/menu-model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  
  listMenu: MenuModel[] = [];

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.listMenu = this.menuService.listMenu;
  }

}
