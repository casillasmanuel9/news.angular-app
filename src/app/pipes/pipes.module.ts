import { DomSanitizerPipe } from './dom-sanitizer.pipe';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [DomSanitizerPipe],
  imports: [
  ], exports: [
    DomSanitizerPipe
  ]
})
export class PipesModule { }
