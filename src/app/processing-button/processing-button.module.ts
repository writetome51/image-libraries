import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessingButtonComponent } from './processing-button.component';
import { LoadingSpinnerComponent } from './loading-spinner.component';


@NgModule({
	declarations: [ProcessingButtonComponent, LoadingSpinnerComponent],
	imports: [CommonModule],
	exports: [ProcessingButtonComponent]
})
export class ProcessingButtonModule {
}
