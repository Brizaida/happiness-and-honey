import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderContactoComponent } from './components/header-contacto/header-contacto.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderContactoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HeaderContactoComponent
  ]
})
export class SharedModule { }
