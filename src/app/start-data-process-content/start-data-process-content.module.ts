import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartDataProcessContentComponent } from './start-data-process-content.component';
import { TinyLoadingSpinnerModule }
	from '../shared-modules/tiny-loading-spinner/tiny-loading-spinner.module';


@NgModule({
	declarations: [StartDataProcessContentComponent],
	imports: [
		CommonModule, TinyLoadingSpinnerModule
	],
	exports: [StartDataProcessContentComponent]
})
export class StartDataProcessContentModule {
}
