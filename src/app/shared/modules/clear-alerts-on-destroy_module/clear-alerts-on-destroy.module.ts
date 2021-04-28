import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClearAlertsOnDestroyDirective } from './clear-alerts-on-destroy.directive';


@NgModule({
	declarations: [ClearAlertsOnDestroyDirective],
	imports: [CommonModule],
	exports: [ClearAlertsOnDestroyDirective]
})
export class ClearAlertsOnDestroyModule {}
