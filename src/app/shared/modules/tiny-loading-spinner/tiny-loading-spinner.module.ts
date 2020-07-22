import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TinyLoadingSpinnerComponent } from './tiny-loading-spinner.component';


@NgModule({
	declarations: [TinyLoadingSpinnerComponent],
	imports: [CommonModule],
	exports: [TinyLoadingSpinnerComponent]
})
export class TinyLoadingSpinnerModule {
}
