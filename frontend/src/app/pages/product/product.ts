import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
  standalone: true,
})
export class Product {
  products = [
    {
      id: 1,
      name: 'Auriculares Gamer',
      price: 49.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Teclado Mecánico RGB',
      price: 89.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Mouse Inalámbrico',
      price: 29.99,
      image: 'https://via.placeholder.com/150',
    },
  ];
}
