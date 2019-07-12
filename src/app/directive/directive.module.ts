import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveComponent } from './directive/directive.component';

@NgModule({
  declarations: [DirectiveComponent],
  imports: [
    CommonModule
  ],
  exports:[DirectiveComponent]
})
export class DirectiveModule { }
