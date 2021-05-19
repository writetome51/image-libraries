import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppAlertComponent } from './app-alert.component';
import { AppAlertsComponent } from './app-alerts.component';


@NgModule({
	declarations: [
		AppAlertComponent,
		AppAlertsComponent
	],
	imports: [CommonModule],
	exports: [AppAlertsComponent]
})
export class AppAlertsModule {}
