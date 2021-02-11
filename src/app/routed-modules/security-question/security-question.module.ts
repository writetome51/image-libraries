import { AnswerSecurityQuestionFormModule }
	from './answer-security-question-form/answer-security-question-form.module';
import { ClearFormOnInitModule } from '@clear-form-on-init/clear-form-on-init.module';
import { ClearAlertOnDestroyModule } from '@clear-alert-on-destroy/clear-alert-on-destroy.module';
import { CommonModule } from '@angular/common';
import { DeAuthenticatedGuard } from '@guards/de-authenticated.guard';
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
		ClearFormOnInitModule,
		ClearAlertOnDestroyModule,
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
