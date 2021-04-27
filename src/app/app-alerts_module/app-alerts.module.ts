import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppAlertComponent } from '@app/app-alerts_module/app-alert.component';
import { AppAlertsComponent } from '@app/app-alerts_module/app-alerts.component';


@NgModule({
	declarations: [
		AppAlertComponent,
		AppAlertsComponent
	],
	imports: [CommonModule],
	exports: [AppAlertsComponent]
})
export class AppAlertsModule {}
