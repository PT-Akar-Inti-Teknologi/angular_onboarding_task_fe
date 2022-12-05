import { Injectable } from '@angular/core';
import { MenuModel } from 'src/app/shared/interfaces/menu-model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  
  private menu: MenuModel[] = [
    {
      label: 'Dashboard',
      icon: '',
      link: '/'
    },
    {
      label: 'Products',
      icon: '',
      link: '/products'
    }, 
    {
      label: 'Sales',
      icon: '',
      link: '/sales'
    },
    {
      label: 'Reports',
      icon: '',
      link: '/reports'
    },           
  ];

  constructor() { }

  get listMenu(): MenuModel[]{
    return this.menu;
  }
}
