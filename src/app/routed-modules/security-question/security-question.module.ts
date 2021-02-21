import { AnswerSecurityQuestionFormModule }
	from './answer-security-question-form_module/answer-security-question-form.module';
import { ClearFormOnInitModule } from '@clear-form-on-init/clear-form-on-init.module';
import { ClearAlertOnDestroyModule } from '@clear-alert-on-destroy/clear-alert-on-destroy.module';
import { CommonModule } from '@angular/common';
import { DeAuthenticatedGuard } from '@guards/de-authenticated.guard';
import { GetSecurityQuestionFormModule }
	from './get-security-question-form_module/get-security-question-form.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SecurityQuestionComponent } from './security-question.component';
import { SecurityQuestionServicesModule } from './security-question-services.module';


@NgModule({
	declarations: [SecurityQuestionComponent],
	imports: [
		CommonModule,
		GetSecurityQuestionFormModule,
		AnswerSecurityQuestionFormModule,
		ClearFormOnInitModule,
		ClearAlertOnDestroyModule,
		SecurityQuestionServicesModule,
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