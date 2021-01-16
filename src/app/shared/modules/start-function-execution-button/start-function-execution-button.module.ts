import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartFunctionExecutionButtonComponent } from './start-function-execution-button.component';
import { TinyLoadingSpinnerModule } from '@tiny-loading-spinner/tiny-loading-spinner.module';


@NgModule({
	declarations: [StartFunctionExecutionButtonComponent],
	imports: [CommonModule, TinyLoadingSpinnerModule],
	exports: [StartFunctionExecutionButtonComponent]
})
export class StartFunctionExecutionButtonModule {
}
