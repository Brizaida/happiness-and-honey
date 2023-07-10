import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public carrousel = [
    {
      title: 'First slide label',
      description: 'Desafía tus sentidos y déjate seducir por la tentación más natural',
      image: '../../../../assets/fondo.jpg',
    },
    {
      title: 'First slide label',
      description: 'Nuestra miel es el elixir que despierta tus gustos más refinados y te sumerge en un universo de sabores irresistibles',
      image: '../../../../assets/fondo.jpg',
    },
    {
      title: 'First slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      image: '../../../../assets/fondo.jpg',
    },
  ]
}
