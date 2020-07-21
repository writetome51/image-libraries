import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartDataProcessButtonComponent } from './start-data-process-button.component';
import { TinyLoadingSpinnerModule } from '../tiny-loading-spinner/tiny-loading-spinner.module';


@NgModule({
	declarations: [StartDataProcessButtonComponent],
	imports: [CommonModule, TinyLoadingSpinnerModule],
	exports: [StartDataProcessButtonComponent]
})
export class StartDataProcessButtonModule {
}
