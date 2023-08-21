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

  public productos: Producto[] = [
    {
      id: 1,
      nombre: 'Miel multifloral',
      descripcion: 'Miel de abeja pura, recolectada en la sierra peruana, de color ámbar claro, sabor dulce y aroma floral.',
      whatsapp: 'https://api.whatsapp.com/send?phone=51974435654&text=¡Hola!%20Me%20encantaría%20adquirir%20el%20producto%20"Miel%20multifloral"',
      precio: 25,
      imagen: '../../../../assets/images/productos/producto1.jpeg',
      stock: 10,
      oferta: true,
      cantidad: 1,
    },
    {
      id: 2,
      nombre: 'Miel de eucalipto',
      descripcion: 'Miel de abeja pura, recolectada en la sierra peruana, de color ámbar claro, sabor dulce y aroma floral.',
      whatsapp: 'https://api.whatsapp.com/send?phone=51974435654&text=¡Hola!%20Me%20encantaría%20adquirir%20el%20producto%20"Miel%20de%20eucalipto"',
      precio: 25,
      imagen: '../../../../assets/images/productos/producto2.jpeg',
      stock: 10,
      oferta: true,
      cantidad: 1,
    },
    {
      id: 3,
      nombre: 'Miel de valle',
      descripcion: 'Miel de abeja pura, recolectada en la sierra peruana, de color ámbar claro, sabor dulce y aroma floral.',
      whatsapp: 'https://api.whatsapp.com/send?phone=51974435654&text=¡Hola!%20Me%20encantaría%20adquirir%20el%20producto%20"Miel%20de%20valle"',
      precio: 25,
      imagen: '../../../../assets/images/productos/producto3.jpeg',
      stock: 10,
      oferta: true,
      cantidad: 1,
    }
  ]
}
