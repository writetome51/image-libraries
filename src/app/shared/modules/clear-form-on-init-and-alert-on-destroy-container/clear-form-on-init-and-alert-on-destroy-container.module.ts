import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClearAlertOnDestroyContainerComponent } from './clear-alert-on-destroy-container.component';
import { ClearFormOnInitAndAlertOnDestroyContainerComponent }
	from './clear-form-on-init-and-alert-on-destroy-container.component';


@NgModule({
	declarations: [
		ClearAlertOnDestroyContainerComponent,
		ClearFormOnInitAndAlertOnDestroyContainerComponent
	],
	imports: [CommonModule],
	exports: [
		ClearAlertOnDestroyContainerComponent,
		ClearFormOnInitAndAlertOnDestroyContainerComponent
	]
})
export class ClearFormOnInitAndAlertOnDestroyContainerModule {
}
