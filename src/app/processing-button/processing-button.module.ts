import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessingButtonComponent } from './processing-button.component';
import { TinyLoadingSpinnerComponent } from './tiny-loading-spinner.component';


@NgModule({
	declarations: [ProcessingButtonComponent, TinyLoadingSpinnerComponent],
	imports: [CommonModule],
	exports: [ProcessingButtonComponent]
})
export class ProcessingButtonModule {
}
