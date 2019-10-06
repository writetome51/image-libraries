import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LittleLoadingSpinnerComponent } from './little-loading-spinner.component';
import { BigLoadingSpinnerComponent } from './big-loading-spinner.component';


@NgModule({
	declarations: [LittleLoadingSpinnerComponent, BigLoadingSpinnerComponent],
	imports: [CommonModule],
	exports: [LittleLoadingSpinnerComponent, BigLoadingSpinnerComponent]
})
export class LoadingSpinnerModule {
}
