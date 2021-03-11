import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClearFormOnInitDirective } from './clear-form-on-init.directive';


@NgModule({
	declarations: [ClearFormOnInitDirective],
	imports: [CommonModule],
	exports: [ClearFormOnInitDirective]
})
export class ClearFormOnInitModule {}
