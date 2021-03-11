import { CommonModule } from '@angular/common';
import { ClickExecuteFunctionDivComponent } from './click-execute-function-div.component';
import { NgModule } from '@angular/core';
import { TinyLoadingSpinnerModule } from '@tiny-loading-spinner_module/tiny-loading-spinner.module';


@NgModule({
	declarations: [ClickExecuteFunctionDivComponent],
	imports: [CommonModule, TinyLoadingSpinnerModule],
	exports: [ClickExecuteFunctionDivComponent]
})
export class ClickExecuteFunctionDivModule {}
