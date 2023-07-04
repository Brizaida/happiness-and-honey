import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductLayoutComponent } from './layouts/product-layout/product-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { TipsComponent } from './pages/tips/tips.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  {
    path: '',
    component: ProductLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'nosotros', component: NosotrosComponent },
      { path: 'productos', component: ProductosComponent },
      { path: 'tips', component: TipsComponent },
      { path: 'contacto', component: ContactoComponent },
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
