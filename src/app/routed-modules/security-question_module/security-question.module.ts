import { CommonModule } from '@angular/common';
import { DeAuthenticatedGuard } from '@guards/de-authenticated.guard';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SecurityQuestionComponent } from './security-question.component';
import { SecurityQuestionServicesModule } from './security-question-services.module';
import { SecurityQuestionFormsModule }
	from './security-question-forms_module/security-question-forms.module';


@NgModule({
	declarations: [SecurityQuestionComponent],
	imports: [
		CommonModule,
		SecurityQuestionFormsModule,
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
export class SecurityQuestionModule {}
