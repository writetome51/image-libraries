import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMessageCenterComponent } from './app-message-center.component';
import { AppAlertsModule } from './app-alerts_module/app-alerts.module';
import { AppHorizontalProgressBarsModule }
	from './app-horizontal-progress-bars_module/app-horizontal-progress-bars.module';


@NgModule({
	declarations: [AppMessageCenterComponent],
	imports: [
		CommonModule,
		AppAlertsModule,
		AppHorizontalProgressBarsModule
	],
	exports: [AppMessageCenterComponent]
})
export class AppMessageCenterModule {}
