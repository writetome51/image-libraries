import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityQuestionComponent } from './security-question.component';
import { GetSecurityQuestionFormComponent }
	from './get-security-question-form/get-security-question-form.component';
import { GetSecurityQuestionFormInputsComponent }
	from './get-security-question-form/get-security-question-form-inputs.component';
import { AnswerSecurityQuestionComponent } from './answer-security-question/answer-security-question.component';
import { AnswerSecurityQuestionFormComponent }
	from './answer-security-question-form/answer-security-question-form.component';
import { AnswerSecurityQuestionFormInputsComponent }
	from './answer-security-question-form/answer-security-question-form-inputs.component';


@NgModule({
	declarations: [
		SecurityQuestionComponent,
		GetSecurityQuestionFormComponent,
		GetSecurityQuestionFormInputsComponent,
		AnswerSecurityQuestionComponent,
		AnswerSecurityQuestionFormComponent,
		AnswerSecurityQuestionFormInputsComponent
	],
	imports: [
		CommonModule
	]
})
export class SecurityQuestionModule {
}
