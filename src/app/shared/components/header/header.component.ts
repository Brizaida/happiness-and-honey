import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public click: boolean = false;

  public nav = [
    { name: 'Inicio', route: 'product' },
    { name: 'Nosotros', route: 'product/nosotros' },
    { name: 'Productos', route: 'product/productos' },
    { name: 'Tips', route: 'product/tips' },
    { name: 'Contacto', route: 'product/contacto' }
  ]

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 950) {
      this.click = false;
    }
  }

  onClick() {
    this.click = !this.click;
  }
}
