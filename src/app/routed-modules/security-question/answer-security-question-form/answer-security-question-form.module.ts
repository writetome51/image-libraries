import { AnswerSecurityQuestionFormComponent } from './answer-security-question-form.component';
import { AnswerSecurityQuestionFormInputComponent }
	from './answer-security-question-form-input.component';
import { AppValidatingFormInputsModule }
	from '@app-validating-form-inputs/app-validating-form-inputs.module';
import { SubmitFormButtonModule } from '@submit-form-button/submit-form-button.module';
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
