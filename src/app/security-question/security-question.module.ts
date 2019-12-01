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
import { ProcessingButtonModule } from '../processing-button/processing-button.module';
import { SecurityQuestionComponent } from './security-question.component';
import { ValidatingInputsModule } from '../validating-inputs/validating-inputs.module';
import { RouterModule } from '@angular/router';


@NgModule({
	declarations: [
		AnswerSecurityQuestionFormComponent,
		AnswerSecurityQuestionFormInputsComponent,
		GetSecurityQuestionFormComponent,
		GetSecurityQuestionFormInputsComponent,
		SecurityQuestionComponent,
	],
	imports: [
		CommonModule,
		ProcessingButtonModule,
		ValidatingInputsModule,
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
