import { AppValidatingFormInputsModule }
	from '@app-validating-form-inputs_module/app-validating-form-inputs.module';
import { CommonModule } from '@angular/common';
import { GetSecurityQuestionFormComponent } from './get-security-question-form.component';
import { GetSecurityQuestionFormInputComponent }
	from './get-security-question-form-input.component';
import { NgModule } from '@angular/core';
import { SubmitFormButtonModule } from '@submit-form-button_module/submit-form-button.module';


@NgModule({
	declarations: [
		GetSecurityQuestionFormComponent,
		GetSecurityQuestionFormInputComponent
	],
	imports: [
		CommonModule,
		AppValidatingFormInputsModule,
		SubmitFormButtonModule,
	],
	exports: [GetSecurityQuestionFormComponent]
})
export class GetSecurityQuestionFormModule {}
