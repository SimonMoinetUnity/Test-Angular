import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.modele';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = 'assets/products.json';
  private APIUrl = '';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(this.productsUrl);
  }


  // Requêtes API REST

  createProduct(product: Product): Observable<any> {
    return this.http.post(this.APIUrl, product);
  }

  updateProduct(product: Product): Observable<Product> {
    let id = product.id;
    return this.http.put<Product>(`${this.APIUrl}/${id}`, product);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.APIUrl}/${id}`);
  }

  deleteProduct(id: number) : Observable<any>{
    return this.http.delete(`${this.APIUrl}/${id}`)
  }
}
