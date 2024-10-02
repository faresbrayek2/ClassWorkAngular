import { SearchPricePipe } from './../../../pipes/search-price.pipe';
import { Component } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.css'],
})
export class ProductsComponentComponent {
  price: number = 0;
  listProducts: Product[] = [
    {
      id: 1,
      name: 'Refrigérateur LG Inox',
      image: 'assets/images/product1.jpg',
      categoryId: 1,
      description: '',
      price: 2800,
      brand: 'LG',
      promotion: 0,
      nblike: 0,
    },
    {
      id: 2,
      name: 'Refrigérateur Samsung Blanc',
      image: 'assets/images/product3.jpeg',
      categoryId: 1,
      description: '',
      price: 2400,
      brand: 'Samsung',
      promotion: 0,
      nblike: 0,
    },
    {
      id: 3,
      name: 'Lave vaisselle Beko',
      image: 'assets/images/product4.jpeg',
      categoryId: 1,
      description: '',
      price: 1875,
      brand: 'BEKO',
      promotion: 0,
      nblike: 0,
    },
    {
      id: 4,
      name: 'Oppo Smart Phone',
      image: 'assets/images/product5.jpeg',
      categoryId: 4,
      description: '',
      price: 1200,
      brand: 'OPPO',
      promotion: 0,
      nblike: 0,
    },
    {
      id: 5,
      name: 'Hachoir',
      image: 'assets/images/product6.jpeg',
      categoryId: 2,
      description: '',
      price: 120,
      brand: 'Moulinex',
      promotion: 0,
      nblike: 0,
    },
    {
      id: 6,
      name: "TV 50'' LG",
      image: 'assets/images/product7.jpeg',
      categoryId: 5,
      description: '',
      price: 1800,
      brand: 'LG',
      promotion: 0,
      nblike: 0,
    },
  ];
  filteredProducts: Product[] = [...this.listProducts]; // Initialize with all products

  likeProduct(productId: number): void {
    const product = this.listProducts.find((p) => p.id === productId);
    if (product) {
      product.nblike += 1;
    }
  }
}
