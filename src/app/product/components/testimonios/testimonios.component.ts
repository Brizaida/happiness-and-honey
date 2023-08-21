import { Component } from '@angular/core';
import { Cliente } from '../../interfaces/clientes.interface';

@Component({
  selector: 'product-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.css']
})
export class TestimoniosComponent {

  public clientes: Cliente[] = [
    {
      nombre: 'Edith',
      foto: '../../../../assets/images/clientes/profile.png',
      testimonio: '¡Es increíble disfrutar de una miel artesanal y conocer su origen! Realmente eleva el sabor de mis comidas y bebidas favoritas',
    },
    {
      nombre: 'Luis',
      foto: '../../../../assets/images/clientes/profile.png',
      testimonio: '¡Me encanta Happiness&Honey! Su selección de mieles orgánicas es impresionante, y puedo disfrutar de diferentes sabores y matices en cada cucharada',
    },
    {
      nombre: 'Alonso',
      foto: '../../../../assets/images/clientes/profile.png',
      testimonio: '¡Descubrí un verdadero tesoro en Happiness&Honey! Sus productos son de alta calidad y sabor excepcional',
    },
    {
      nombre: 'Lucero',
      foto: '../../../../assets/images/clientes/profile.png',
      testimonio: '¡Comprobado! Happiness&Honey solo ofrece miel 100% natural',
    }
  ]
}
