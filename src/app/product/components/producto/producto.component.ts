import { Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/product.interface';

@Component({
  selector: 'product-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  @Input() producto!: Producto;
}
