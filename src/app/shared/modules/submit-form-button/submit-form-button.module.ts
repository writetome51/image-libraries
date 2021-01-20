import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitFormButtonComponent } from './submit-form-button.component';
import { ExecuteFunctionButtonModule }
	from '@execute-function-button/execute-function-button.module';


@NgModule({
	declarations: [SubmitFormButtonComponent],
	imports: [CommonModule, ExecuteFunctionButtonModule],
	exports: [SubmitFormButtonComponent]
})
export class SubmitFormButtonModule {
}
