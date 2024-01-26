import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data.data;
      console.log(this.products)
    });
  }

  deleteProduct(productId: number): void {
    console.log("Le produit " + productId + " a été supprimé")
  }

}
