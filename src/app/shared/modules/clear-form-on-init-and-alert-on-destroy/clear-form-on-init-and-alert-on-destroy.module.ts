import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClearAlertOnDestroyDirective } from './clear-alert-on-destroy.directive';
import { ClearFormOnInitDirective } from './clear-form-on-init.directive';


@NgModule({
	declarations: [
		ClearAlertOnDestroyDirective,
		ClearFormOnInitDirective,
	],
	imports: [CommonModule],
	exports: [
		ClearAlertOnDestroyDirective,
		ClearFormOnInitDirective,
	]
})
export class ClearFormOnInitAndAlertOnDestroyModule {
}
