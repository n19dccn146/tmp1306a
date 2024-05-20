import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { CreateCarComponent } from './pages/create-car/create-car.component';
import { UpdateCarComponent } from './pages/update-car/update-car.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'menu/:id',component:MenupageComponent},
  {path:'car',component:ProductListComponent},
  {path:'createCar',component:CreateCarComponent},
  {path:'updateCar',component:UpdateCarComponent},

  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
