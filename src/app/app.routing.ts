//import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



// Componentes Propios
import { AppComponent } from './app.component';

import { ProductMainComponent } from './product/product-main/product-main.component';
import { MainComponent } from './main/main.component';

//import { MainComponent } from 'app/ui/main/main.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: MainComponent },
  { path: 'product', component: ProductMainComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})

export class AppRoutingModule { }
