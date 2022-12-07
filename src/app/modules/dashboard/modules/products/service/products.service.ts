import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsModel } from '../interface/products-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private urlPath = 'https://6147e05c65467e0017384c29.mockapi.io/api/products';

  constructor(
    private httpClient: HttpClient
  ) { }


  getData(): Observable<ProductsModel[]> {
    return this.httpClient.get<ProductsModel[]>(this.urlPath);
  }


}
