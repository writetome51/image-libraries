import { CommonModule } from '@angular/common';
import { ExecuteFunctionButtonModule }
	from '@execute-function-button_module/execute-function-button.module';
import { NgModule } from '@angular/core';
import { SubmitFormButtonComponent } from './submit-form-button.component';


@NgModule({
	declarations: [SubmitFormButtonComponent],
	imports: [CommonModule, ExecuteFunctionButtonModule],
	exports: [SubmitFormButtonComponent],
})
export class SubmitFormButtonModule {}
