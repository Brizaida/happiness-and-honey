import { Component } from '@angular/core';
import { Producto } from '../../interfaces/product.interface';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
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
    },
    {
      id: 4,
      nombre: 'Miel multifloral',
      descripcion: 'Miel de abeja pura, recolectada en la sierra peruana, de color ámbar claro, sabor dulce y aroma floral.',
      whatsapp: 'https://api.whatsapp.com/send?phone=51974435654&text=¡Hola!%20Me%20encantaría%20adquirir%20el%20producto%20"Miel%20multifloral"',
      precio: 25,
      imagen: '../../../../assets/images/productos/producto4.png',
      stock: 10,
      oferta: true,
      cantidad: 1,
    },
    {
      id: 5,
      nombre: 'Miel de eucalipto',
      descripcion: 'Miel de abeja pura, recolectada en la sierra peruana, de color ámbar claro, sabor dulce y aroma floral.',
      whatsapp: 'https://api.whatsapp.com/send?phone=51974435654&text=¡Hola!%20Me%20encantaría%20adquirir%20el%20producto%20"Miel%20de%20eucalipto"',
      precio: 25,
      imagen: '../../../../assets/images/productos/producto5.png',
      stock: 10,
      oferta: true,
      cantidad: 1,
    },
    {
      id: 6,
      nombre: 'Miel de valle',
      descripcion: 'Miel de abeja pura, recolectada en la sierra peruana, de color ámbar claro, sabor dulce y aroma floral.',
      whatsapp: 'https://api.whatsapp.com/send?phone=51974435654&text=¡Hola!%20Me%20encantaría%20adquirir%20el%20producto%20"Miel%20de%20valle"',
      precio: 25,
      imagen: '../../../../assets/images/productos/producto6.png',
      stock: 10,
      oferta: true,
      cantidad: 1,
    },
    {
      id: 7,
      nombre: 'Miel de valle',
      descripcion: 'Miel de abeja pura, recolectada en la sierra peruana, de color ámbar claro, sabor dulce y aroma floral.',
      whatsapp: 'https://api.whatsapp.com/send?phone=51974435654&text=¡Hola!%20Me%20encantaría%20adquirir%20el%20producto%20"Miel%20de%20valle"',
      precio: 25,
      imagen: '../../../../assets/images/productos/producto7.png',
      stock: 10,
      oferta: true,
      cantidad: 1,
    }
  ]
}
