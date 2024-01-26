import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.modele';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss']
})
export class ProductsAdminComponent implements OnInit {

  products: any[] = [];
  products2 = [1,2,3];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data.data;
      console.log(this.products)
    });
    console.log(this.products[1])
  }

  deleteProduct(productId: number): void {
    console.log("Le produit " + productId + " a été supprimé")
  }

}
