import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClearAlertOnDestroyDirective } from './clear-alert-on-destroy.directive';


@NgModule({
	declarations: [ClearAlertOnDestroyDirective],
	imports: [CommonModule],
	exports: [ClearAlertOnDestroyDirective]
})
export class ClearAlertOnDestroyModule {}
