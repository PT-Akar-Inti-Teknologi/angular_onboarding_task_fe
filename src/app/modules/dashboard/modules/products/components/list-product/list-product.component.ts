import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsModel } from '../../interface/products-model';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit, AfterViewInit  {
  
  displayedColumns: string[] = ['index', 'name', 'material', 'color', 'product', 'adjective', 'price'];
  dataSource !: MatTableDataSource<ProductsModel>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  length = 0;

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.onLoadData();
  }

  ngAfterViewInit() {
    
  }

  onLoadData(){
    this.productService.getData().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.length = res.length;
      this.dataSource.sort = this.sort;
    });
  }  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }  
}