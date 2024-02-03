import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.modele';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  allProducts: Product[] = []
  products: Product[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  searchTerm: string = '';

  constructor(private productService: ProductService) {
    
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.allProducts = data.data;
      console.log(this.products)
      this.updateProducts();
    });
    
  }

  updateProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    let filteredProducts = this.allProducts;

    // Filtrer les produits en fonction de la chaîne de recherche
    if (this.searchTerm.trim() !== '') {
      filteredProducts = this.allProducts.filter(product =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    // Paginer les produits filtrés
    this.products = filteredProducts.slice(startIndex, startIndex + this.itemsPerPage);
  }

}
