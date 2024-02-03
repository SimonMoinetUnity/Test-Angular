import { Component, Input } from '@angular/core';
import { Product } from '../product.modele';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input()
  product:Product;

  etoiles: any[] = [];

  ngOnInit(): void {
    this.genererEtoiles();
  }

  genererEtoiles(): void {
    const nombreEtoiles = this.product.rating;
    for (let i = 0; i < 5; i++) {
      this.etoiles.push({ remplie: i < nombreEtoiles });
    }
  }

  ajouterAupanier(){
    console.log("Le produit a été ajouté au panier.")
  }

}
