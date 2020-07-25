import { AnswerSecurityQuestionFormComponent }
	from './answer-security-question-form/answer-security-question-form.component';
import { AnswerSecurityQuestionFormInputComponent }
	from './answer-security-question-form/answer-security-question-form-input.component';
import { CommonModule } from '@angular/common';
import { DeAuthenticatedGuard } from '../guards/de-authenticated.guard';
import { GetSecurityQuestionFormComponent }
	from './get-security-question-form/get-security-question-form.component';
import { GetSecurityQuestionFormInputComponent }
	from './get-security-question-form/get-security-question-form-input.component';
import { NgModule } from '@angular/core';
import { StartDataProcessButtonModule }
	from '../shared/modules/start-data-process-button/start-data-process-button.module';
import { SecurityQuestionComponent } from './security-question.component';
import { AppValidatingFormInputsModule }
	from '../shared/modules/app-validating-form-inputs/app-validating-form-inputs.module';
import { RouterModule } from '@angular/router';
import { SubmitAnswerButtonComponent }
	from './answer-security-question-form/submit-answer-button/submit-answer-button.component';
import { GetQuestionButtonComponent }
	from './get-security-question-form/get-question-button/get-question-button.component';


@NgModule({
	declarations: [
		AnswerSecurityQuestionFormComponent,
		AnswerSecurityQuestionFormInputComponent,
		GetSecurityQuestionFormComponent,
		GetSecurityQuestionFormInputComponent,
		GetQuestionButtonComponent,
		SecurityQuestionComponent,
		SubmitAnswerButtonComponent
	],
	imports: [
		CommonModule,
		AppValidatingFormInputsModule,
		StartDataProcessButtonModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: SecurityQuestionComponent,
				canActivate: [DeAuthenticatedGuard]
			},

			{path: '**', redirectTo: ''}
		])
	]
})
export class SecurityQuestionModule {
}
