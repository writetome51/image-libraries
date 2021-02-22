import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExecuteFunctionButtonComponent } from './execute-function-button.component';
import { TinyLoadingSpinnerModule } from '@tiny-loading-spinner/tiny-loading-spinner.module';


@NgModule({
	declarations: [ExecuteFunctionButtonComponent],
	imports: [CommonModule, TinyLoadingSpinnerModule],
	exports: [ExecuteFunctionButtonComponent]
})
export class ExecuteFunctionButtonModule {
}
