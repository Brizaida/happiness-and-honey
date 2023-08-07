import { Component, HostListener } from '@angular/core';
import { Banner } from '../../interfaces/banner.interface';
import { Producto } from '../../interfaces/product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public ancho: string;
  public alto: string;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 992) {
      this.ancho = `width: ${event.target.innerWidth*0.9}px`;
      this.alto = `height: ${event.target.innerWidth * (8.1/16)}px`;
      return;
    }
    this.ancho = `width: ${event.target.innerWidth * 0.7}px`;
    this.alto = `height: ${event.target.innerWidth * (6.3/16)}px`;
  }

  constructor() {
    if (window.innerWidth < 992) {
      this.ancho = `width: ${window.innerWidth*0.9}px`;
      this.alto = `height: ${window.innerWidth * (8.1/16)}px`;
      return;
    }
    this.ancho = `width: ${window.innerWidth * 0.7}px`;
    this.alto = `height: ${window.innerWidth * (6.3/16)}px`;
  }

  public carrousel: Banner[] = [
    {
      description: 'Desafía tus sentidos y déjate seducir por la tentación más natural',
      image: '../../../../assets/images/banners/banner1.jpeg',
    },
    {
      description: 'Nuestra miel es el elixir que despierta tus gustos más refinados y te sumerge en un universo de sabores irresistibles',
      image: '../../../../assets/images/banners/banner2.jpeg',
    },
    {
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      image: '../../../../assets/images/banners/banner3.jpeg',
    },
  ]

  public productos: Producto[] = [
    {
      id: 1,
      nombre: 'Miel de abeja 1',
      descripcion: 'Miel de abeja pura lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      precio: 25,
      imagen: '../../../../assets/images/productos/producto1.jpg',
      stock: 10,
      oferta: true,
      cantidad: 1,
    },
    {
      id: 2,
      nombre: 'Miel de abeja 2',
      descripcion: 'Miel de abeja pura lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      precio: 25,
      imagen: '../../../../assets/images/productos/producto1.jpg',
      stock: 10,
      oferta: true,
      cantidad: 1,
    },
    {
      id: 3,
      nombre: 'Miel de abeja 3',
      descripcion: 'Miel de abeja pura lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      precio: 25,
      imagen: '../../../../assets/images/productos/producto1.jpg',
      stock: 10,
      oferta: true,
      cantidad: 1,
    }
  ]
}
