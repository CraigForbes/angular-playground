import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormPlayRoutingModule } from './form-play-routing.module';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormPlayRoutingModule
  ],
  declarations: [ReactiveFormComponent, TemplateDrivenFormComponent]
})
export class FormPlayModule { }
