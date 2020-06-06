import { AnswerSecurityQuestionFormComponent }
	from './answer-security-question-form/answer-security-question-form.component';
import { AnswerSecurityQuestionFormInputsComponent }
	from './answer-security-question-form/answer-security-question-form-inputs.component';
import { CommonModule } from '@angular/common';
import { DeAuthenticatedGuard } from '../guards/de-authenticated.guard';
import { GetSecurityQuestionFormComponent }
	from './get-security-question-form/get-security-question-form.component';
import { GetSecurityQuestionFormInputsComponent }
	from './get-security-question-form/get-security-question-form-inputs.component';
import { NgModule } from '@angular/core';
import { StartDataProcessButtonModule }
	from '../start-data-process-button/start-data-process-button.module';
import { SecurityQuestionComponent } from './security-question.component';
import { ValidatingInputsModule } from '../validating-inputs/validating-inputs.module';
import { RouterModule } from '@angular/router';
import { SubmitAnswerButtonComponent }
	from './answer-security-question-form/submit-answer-button.component';
import { GetQuestionButtonComponent }
	from './get-security-question-form/get-question-button.component';


@NgModule({
	declarations: [
		AnswerSecurityQuestionFormComponent,
		AnswerSecurityQuestionFormInputsComponent,
		GetSecurityQuestionFormComponent,
		GetSecurityQuestionFormInputsComponent,
		GetQuestionButtonComponent,
		SecurityQuestionComponent,
		SubmitAnswerButtonComponent
	],
	imports: [
		CommonModule,
		ValidatingInputsModule,
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
