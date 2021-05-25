import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalProgressBarModule }
	from '@modules/horizontal-progress-bar_module/horizontal-progress-bar.module';
import { AppHorizontalProgressBarComponent } from './app-horizontal-progress-bar.component';


@NgModule({
	declarations: [AppHorizontalProgressBarComponent],
	imports: [
		CommonModule,
		HorizontalProgressBarModule
	],
	exports: [AppHorizontalProgressBarComponent]
})
export class AppHorizontalProgressBarModule {}
