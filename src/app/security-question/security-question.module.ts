import { AppValidatingFormInputsModule }
	from '@app-validating-form-inputs/app-validating-form-inputs.module';
import { AnswerSecurityQuestionFormComponent }
	from './answer-security-question-form/answer-security-question-form.component';
import { AnswerSecurityQuestionFormInputComponent }
	from './answer-security-question-form/answer-security-question-form-input.component';
import { CommonModule } from '@angular/common';
import { DeAuthenticatedGuard } from '../guards/de-authenticated.guard';
import { GetQuestionButtonComponent }
	from './get-security-question-form/get-question-button/get-question-button.component';
import { GetSecurityQuestionFormComponent }
	from './get-security-question-form/get-security-question-form.component';
import { GetSecurityQuestionFormInputComponent }
	from './get-security-question-form/get-security-question-form-input.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StartDataProcessButtonModule }
	from '@start-data-process-button/start-data-process-button.module';
import { SecurityQuestionComponent } from './security-question.component';
import { SubmitAnswerButtonComponent }
	from './answer-security-question-form/submit-answer-button/submit-answer-button.component';
import { ClearFormOnInitAndAlertOnDestroyContainerModule } // tslint:disable-next-line:max-line-length
	from '@clear-form-on-init-and-alert-on-destroy-container/clear-form-on-init-and-alert-on-destroy-container.module';


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
		ClearFormOnInitAndAlertOnDestroyContainerModule,
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
