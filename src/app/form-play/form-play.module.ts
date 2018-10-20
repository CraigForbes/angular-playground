import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormPlayRoutingModule } from './form-play-routing.module';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

import { MatSelectModule, MatInputModule } from '@angular/material';

import { EnumToArrayPipe } from '../pipes/enum-to-array.pipe';
import { SelectFormComponent } from './select-form/select-form.component';

import { NgPipesModule } from 'ng-pipes';
import { SelectControlComponent } from '../controls/select-control/select-control.component';

@NgModule({
  imports: [
    CommonModule,
    FormPlayRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    NgPipesModule
  ],
  declarations: [
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    EnumToArrayPipe,
    SelectFormComponent,
    SelectControlComponent
  ],
  providers: []
})
export class FormPlayModule { }
