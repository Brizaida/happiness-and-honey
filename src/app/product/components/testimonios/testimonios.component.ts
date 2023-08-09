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
      nombre: 'Juan',
      foto: '../../../../assets/images/clientes/profile.png',
      testimonio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ad deserunt. Reiciendis quam saepe, non est sequi culpa delectus.',
    },
    {
      nombre: 'Pedro',
      foto: '../../../../assets/images/clientes/profile.png',
      testimonio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ad deserunt. Reiciendis quam saepe, non est sequi culpa delectus.',
    },
    {
      nombre: 'Maria',
      foto: '../../../../assets/images/clientes/profile.png',
      testimonio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ad deserunt. Reiciendis quam saepe, non est sequi culpa delectus.',
    }
  ]
}
