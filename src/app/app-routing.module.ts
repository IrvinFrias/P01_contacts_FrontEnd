import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ContactsComponent} from "./contacts/contacts/contacts.component";
import {PageNotFoundComponent} from "./common-views/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: 'home', component: ContactsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
