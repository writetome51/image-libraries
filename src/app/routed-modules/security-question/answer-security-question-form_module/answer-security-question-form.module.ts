import { AnswerSecurityQuestionFormComponent } from './answer-security-question-form.component';
import { AnswerSecurityQuestionFormInputComponent }
	from './answer-security-question-form-input.component';
import { AppValidatingFormInputsModule }
	from '@app/shared/modules/app-validating-form-inputs_module/app-validating-form-inputs.module';
import { SubmitFormButtonModule } from '@app/shared/modules/submit-form-button_module/submit-form-button.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
	declarations: [
		AnswerSecurityQuestionFormComponent,
		AnswerSecurityQuestionFormInputComponent,
	],
	imports: [
		CommonModule,
		AppValidatingFormInputsModule,
		SubmitFormButtonModule,
	],
	exports: [AnswerSecurityQuestionFormComponent]
})
export class AnswerSecurityQuestionFormModule {
}
