import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsModel } from '../../interface/products-model';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {


  constructor(
  ) { }

  ngOnInit(): void {

  }

}
