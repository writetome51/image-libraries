import { AppValidatingFormInputsModule }
	from '@app-validating-form-inputs/app-validating-form-inputs.module';
import { AnswerSecurityQuestionFormComponent }
	from './answer-security-question-form/answer-security-question-form.component';
import { AnswerSecurityQuestionFormInputComponent }
	from './answer-security-question-form/answer-security-question-form-input.component';
import { ClearFormOnInitAndAlertOnDestroyModule }
	from '@clear-form-on-init-and-alert-on-destroy/clear-form-on-init-and-alert-on-destroy.module';
import { CommonModule } from '@angular/common';
import { DeAuthenticatedGuard } from '@app/shared/guards/de-authenticated.guard';
import { GetSecurityQuestionFormComponent }
	from './get-security-question-form/get-security-question-form.component';
import { GetSecurityQuestionFormInputComponent }
	from './get-security-question-form/get-security-question-form-input.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SecurityQuestionComponent } from './security-question.component';
import { SubmitFormButtonModule } from '@submit-form-button/submit-form-button.module';


@NgModule({
	declarations: [
		AnswerSecurityQuestionFormComponent,
		AnswerSecurityQuestionFormInputComponent,
		GetSecurityQuestionFormComponent,
		GetSecurityQuestionFormInputComponent,
		SecurityQuestionComponent
	],
	imports: [
		CommonModule,
		AppValidatingFormInputsModule,
		ClearFormOnInitAndAlertOnDestroyModule,
		SubmitFormButtonModule,
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
