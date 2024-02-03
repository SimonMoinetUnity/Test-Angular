import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  allProducts: any[] = []
  products: any[] = [];
  currentPage = 1;
  itemsPerPage = 10;

  constructor(private productService: ProductService) {
    
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.allProducts = data.data;
      console.log(this.products)
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      this.products = this.allProducts.slice(0, startIndex + this.itemsPerPage);
    });
    
  }

  updateProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.products = this.allProducts.slice(startIndex, startIndex + this.itemsPerPage);
  }

}
