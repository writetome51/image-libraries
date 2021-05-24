import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingContentSectionComponent } from './loading-content-section.component';
import { BigLoadingSpinnerModule } from '@big-loading-spinner_module/big-loading-spinner.module';
import { SetWaitingToFalseOnDestroyModule }
	from '../set-waiting-to-false-on-destroy_module/set-waiting-to-false-on-destroy.module';


@NgModule({
	declarations: [LoadingContentSectionComponent],
	imports: [
		CommonModule,
		BigLoadingSpinnerModule,
		SetWaitingToFalseOnDestroyModule
	],
	exports: [LoadingContentSectionComponent]
})
export class LoadingContentSectionModule {}
