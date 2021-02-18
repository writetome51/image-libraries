import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigLoadingSpinnerComponent } from './big-loading-spinner_component/big-loading-spinner.component';


@NgModule({
	declarations: [BigLoadingSpinnerComponent],
	imports: [CommonModule],
	exports: [BigLoadingSpinnerComponent]
})
export class BigLoadingSpinnerModule {
}
