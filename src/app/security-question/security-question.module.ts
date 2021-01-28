import { AnswerSecurityQuestionFormModule }
	from './answer-security-question-form/answer-security-question-form.module';
import { ClearFormOnInitAndAlertOnDestroyModule }
	from '@clear-form-on-init-and-alert-on-destroy/clear-form-on-init-and-alert-on-destroy.module';
import { CommonModule } from '@angular/common';
import { DeAuthenticatedGuard } from '@app/shared/guards/de-authenticated.guard';
import { GetSecurityQuestionFormModule }
	from './get-security-question-form/get-security-question-form.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SecurityQuestionComponent } from './security-question.component';


@NgModule({
	declarations: [SecurityQuestionComponent],
	imports: [
		CommonModule,
		GetSecurityQuestionFormModule,
		AnswerSecurityQuestionFormModule,
		ClearFormOnInitAndAlertOnDestroyModule,
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
