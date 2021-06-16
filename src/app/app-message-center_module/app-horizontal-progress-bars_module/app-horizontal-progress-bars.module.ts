import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalProgressBarModule }
	from '@horizontal-progress-bar_module/horizontal-progress-bar.module';
import { AppHorizontalProgressBarComponent } from './app-horizontal-progress-bar.component';
import { AppHorizontalProgressBarsComponent } from './app-horizontal-progress-bars.component';


@NgModule({
	declarations: [
		AppHorizontalProgressBarComponent,
		AppHorizontalProgressBarsComponent
	],
	imports: [
		CommonModule,
		HorizontalProgressBarModule
	],
	exports: [AppHorizontalProgressBarsComponent]
})
export class AppHorizontalProgressBarsModule {}
