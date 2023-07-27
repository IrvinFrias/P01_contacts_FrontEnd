import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavVarComponent } from './nav-var/nav-var.component';
import { GeneralFooterComponent } from './general-footer/general-footer.component';
import {RouterLink} from "@angular/router";
import {NgbCollapse} from "@ng-bootstrap/ng-bootstrap";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    NavVarComponent,
    GeneralFooterComponent,
    PageNotFoundComponent
  ],
  exports: [
    NavVarComponent,
    GeneralFooterComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    NgbCollapse
  ]
})
export class CommonViewsModule { }
