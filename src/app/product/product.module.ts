import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductLayoutComponent } from './layouts/product-layout/product-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { TipsComponent } from './pages/tips/tips.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ProductoComponent } from './components/producto/producto.component';
import { BannerComponent } from './components/banner/banner.component';


@NgModule({
  declarations: [
    ProductLayoutComponent,
    HomeComponent,
    NosotrosComponent,
    ProductosComponent,
    TipsComponent,
    ContactoComponent,
    ProductoComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
