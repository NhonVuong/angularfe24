import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveComponent } from './directive/directive.component';
import { HighLightDirective } from './high-light.directive';

@NgModule({
  declarations: [DirectiveComponent, HighLightDirective],
  imports: [
    CommonModule, 
  ],
  exports:[DirectiveComponent, HighLightDirective]
})
export class DirectiveModule { }
