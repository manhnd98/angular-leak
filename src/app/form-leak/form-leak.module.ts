import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormLeakRoutingModule } from './form-leak-routing.module';
import { FormLeakComponent } from './form-leak.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Component1Component } from './component1.component';
import { Component2Component } from './component2.component';

@NgModule({
  declarations: [FormLeakComponent, Component1Component, Component2Component],
  imports: [CommonModule, FormLeakRoutingModule, ReactiveFormsModule],
})
export class FormLeakModule {}
