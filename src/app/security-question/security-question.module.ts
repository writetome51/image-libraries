import { AnswerSecurityQuestionFormComponent }
	from './answer-security-question-form/answer-security-question-form.component';
import { AnswerSecurityQuestionFormInputsComponent }
	from './answer-security-question-form/answer-security-question-form-inputs.component';
import { CommonModule } from '@angular/common';
import { GetSecurityQuestionFormComponent }
	from './get-security-question-form/get-security-question-form.component';
import { GetSecurityQuestionFormInputsComponent }
	from './get-security-question-form/get-security-question-form-inputs.component';
import { NgModule } from '@angular/core';
import { ProcessingButtonModule } from '../processing-button/processing-button.module';
import { SecurityQuestionComponent } from './security-question.component';
import { ValidatingInputsModule } from '../validating-inputs/validating-inputs.module';


@NgModule({
	declarations: [
		SecurityQuestionComponent,
		GetSecurityQuestionFormComponent,
		GetSecurityQuestionFormInputsComponent,
		AnswerSecurityQuestionFormComponent,
		AnswerSecurityQuestionFormInputsComponent
	],
	imports: [
		CommonModule,
		ProcessingButtonModule,
		ValidatingInputsModule
	]
})
export class SecurityQuestionModule {
}
