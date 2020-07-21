import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartDataProcessButtonComponent } from './start-data-process-button.component';
import { TinyLoadingSpinnerComponent } from './tiny-loading-spinner.component';


@NgModule({
	declarations: [StartDataProcessButtonComponent, TinyLoadingSpinnerComponent],
	imports: [CommonModule],
	exports: [StartDataProcessButtonComponent]
})
export class StartDataProcessButtonModule {
}
