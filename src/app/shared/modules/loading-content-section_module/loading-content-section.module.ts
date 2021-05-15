import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingContentSectionComponent } from './loading-content-section.component';
import { BigLoadingSpinnerModule } from '@big-loading-spinner_module/big-loading-spinner.module';
import { ClearExecutionStatusOnDestroyModule }
	from '../clear-execution-status-on-destroy_module/clear-execution-status-on-destroy.module';


@NgModule({
	declarations: [LoadingContentSectionComponent],
	imports: [
		CommonModule,
		BigLoadingSpinnerModule,
		ClearExecutionStatusOnDestroyModule
	],
	exports: [LoadingContentSectionComponent]
})
export class LoadingContentSectionModule {}
