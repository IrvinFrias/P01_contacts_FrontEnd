import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavVarComponent } from './nav-var/nav-var.component';
import { GeneralFooterComponent } from './general-footer/general-footer.component';



@NgModule({
  declarations: [
    NavVarComponent,
    GeneralFooterComponent
  ],
  exports: [
    NavVarComponent,
    GeneralFooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CommonViewsModule { }
