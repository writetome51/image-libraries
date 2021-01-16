import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitFormButtonComponent } from './submit-form-button.component';
import { StartFunctionExecutionButtonModule }
	from '@start-function-execution-button/start-function-execution-button.module';


@NgModule({
	declarations: [SubmitFormButtonComponent],
	imports: [CommonModule, StartFunctionExecutionButtonModule],
	exports: [SubmitFormButtonComponent]
})
export class SubmitFormButtonModule {
}
