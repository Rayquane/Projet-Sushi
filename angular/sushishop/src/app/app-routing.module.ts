import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanierComponent } from "./components/panier/panier.component";
import { AccueilComponent } from "./components/accueil/accueil.component";

const routes: Routes = [{ path: 'panier', component: PanierComponent },
                        { path: '', component: AccueilComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
