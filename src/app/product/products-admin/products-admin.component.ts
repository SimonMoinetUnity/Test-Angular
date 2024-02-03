import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.modele';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss']
})
export class ProductsAdminComponent implements OnInit {

  allProducts: any[] = []
  products: any[] = [];
  currentPage = 1;
  itemsPerPage = 10;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.allProducts = data.data;
      console.log(this.products)
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      this.products = this.allProducts.slice(0, startIndex + this.itemsPerPage);
    });
    
  }

  deleteProduct(productId: number): void {
    console.log("Le produit " + productId + " a été supprimé")
  }

  updateArticle(productId: number): void {
    console.log("Redirection vers la page du pruduit " + productId)
  }

  updateProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.products = this.allProducts.slice(startIndex, startIndex + this.itemsPerPage);
  }


}
