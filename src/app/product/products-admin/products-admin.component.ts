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
